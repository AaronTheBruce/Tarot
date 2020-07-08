import React, { useState, useEffect } from 'react'
import { getDeck, getSpread, spliceShuffle, stackSuffle, riffleShuffle, renderKeywords } from '../utils/scripts.js';

const TenCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [spread, setSpread] = useState(null);
    const [card, setCard] = useState(null);

    const getThisDeck = () => {
        setTarotDeck(getDeck());
    }

    const shuffle = () => {
        let deck = tarotDeck;
        setTarotDeck(null);
        deck = riffleShuffle(deck);
        deck = spliceShuffle(deck);
        deck = stackSuffle(deck);
        setTarotDeck(deck);
    }

    const getThisSpread = (num) => {
        shuffle();
        setSpread(getSpread(tarotDeck, num));
    }

    useEffect(() => {
        if (!tarotDeck) {
            getThisDeck();
        } else {
            return;
        }
    });

    // const tenCardImage = document.querySelector('.ten_card_image');

    // tenCardImage.addEventListener('click', (event) => {
    //     event.target.classList.add('focus');
    // });

    const cardHandler = (index) => {
        if (card === spread[index]) {
            setCard(null);
        }
        else if (card !== spread[index]) {
            setCard(null);
            setCard(spread[index]);
        }
        else {
            console.log("Card is", card);
            console.log("spread[index]", spread[index]);
            alert("You've hit an exceptional circumstance, what'd you just do? Check log for details");
        }
    }

    const shiftCard = (e) => {
        e.target.classList.toggle('problem')
    }

    const hideTips = (e) => {
        e.target.classList.toggle('hidden');
    }

    return (
        <div className="options">
            <button type="submit" onClick={() => shuffle()}>Shuffle</button>
            <button type="submit" onClick={() => { setSpread(null); setTarotDeck(null); }}>Reset</button>
            <button type="submit" onClick={() => { getThisSpread(10); }} >Get Spread</button>
            {/* <button type="submit" onClick={() => { console.log(spread); }} >Log Spread</button>
            <button type="submit" onClick={() => { console.log(tarotDeck); }} >Log Deck</button> */}
            <div>
                Tips:
                <div onClick={(e) => hideTips(e)}> Hide
                    <ul>
                        <li>Shuffle will shuffle the deck 3 times</li>
                        <li>Reset will set the deck in order</li>
                        <li>Get Spread shuffles once and lays out a Celtic Cross spread</li>
                        <li>Click the horizontal card in the middle to move it for a better view of 'Position By Problem'</li>
                        <li>Click on an individual card for more detail</li>
                    </ul>
                </div>
            </div>
            {spread ?
                <div className="ten_spread">
                    <div className="cross">
                        <div className="none" />
                        <div className="conscious">
                            <div className="position_title">Conscious Thoughts</div>
                            <img className="ten_card_image"
                                alt={spread[2].name}
                                src={`images/cards/${spread[2].img}`}
                                onClick={() => { cardHandler(2) }}>
                            </img>
                            {/* <div>{spread[3].number} {spread[3].name}</div> */}
                        </div>
                        <div className="none" />
                        <div className="past">
                            <div className="position_title">Recent Past</div>
                            <img className="ten_card_image"
                                alt={spread[4].name}
                                src={`images/cards/${spread[4].img}`}
                                onClick={() => { cardHandler(4) }}>
                            </img>
                            {/* <div>{spread[4].number} {spread[4].name}</div> */}
                        </div>
                        <div className="situation">
                            <div className="position_title">Present By Problem</div>
                            {/* <div className="present"> */}
                            <img className="present ten_card_image"
                                alt={spread[0].name}
                                src={`images/cards/${spread[0].img}`}
                                onClick={(e) => { cardHandler(0); }}>
                            </img>
                            {/* <div>{spread[0].number} {spread[0].name}</div> */}
                            {/* </div> */}
                            {/* <div className="problem"> */}
                            <img className="problem ten_card_image"
                                alt={spread[1].name}
                                src={`images/cards/${spread[1].img}`}
                                onClick={(e) => { cardHandler(1); shiftCard(e); }}>
                            </img>
                            {/* <div>{spread[1].number} {spread[1].name}</div> */}
                            {/* </div> */}
                        </div>
                        <div className="future">
                            <div className="position_title">Near Future</div>
                            <img className="ten_card_image"
                                alt={spread[5].name}
                                src={`images/cards/${spread[5].img}`}
                                onClick={(e) => { cardHandler(5) }}>
                            </img>
                            {/* <div>{spread[5].number} {spread[5].name}</div> */}
                        </div>
                        <div className="none" />
                        <div className="unconscious">
                            <div className="position_title">Unconscious Thoughts</div>
                            <img className="ten_card_image"
                                alt={spread[3].name}
                                src={`images/cards/${spread[3].img}`}
                                onClick={() => { cardHandler(3) }}>
                            </img>
                            {/* <div>{spread[3].number} {spread[3].name}</div> */}
                        </div>
                        <div className="none" />
                    </div>
                    <div className="spear">
                        <div className="outcome">
                            <div className="position_title">Final Outcome</div>
                            <img className="ten_card_image"
                                alt={spread[9].name}
                                src={`images/cards/${spread[9].img}`}
                                onClick={() => { cardHandler(9) }}>
                            </img>
                            {/* <div>{spread[9].number} {spread[9].name}</div> */}
                        </div>
                        <div className="hopes_and_fears">
                            <div className="position_title">Hopes and Fears</div>
                            <img className="ten_card_image"
                                alt={spread[8].name}
                                src={`images/cards/${spread[8].img}`}
                                onClick={() => { cardHandler(8) }}>
                            </img>
                            {/* <div>{spread[8].number} {spread[8].name}</div> */}
                        </div>
                        <div className="ext_influence">
                            <div className="position_title">Your Environment</div>
                            <img className="ten_card_image"
                                alt={spread[7].name}
                                src={`images/cards/${spread[7].img}`}
                                onClick={() => { cardHandler(7) }}>
                            </img>
                            {/* <div>{spread[7].number} {spread[7].name}</div> */}
                        </div>
                        <div className="your_influence">
                            <div className="position_title">Your Self</div>
                            <img className="ten_card_image"
                                alt={spread[6].name}
                                src={`images/cards/${spread[6].img}`}
                                onClick={() => { cardHandler(6) }}>
                            </img>
                            {/* <div>{spread[6].number} {spread[6].name}</div> */}
                        </div>
                    </div>

                    {card ?
                        <div className="card">

                            <img className="focused-card-image"
                                src={`images/cards/${card.img}`}
                                alt={card.name} />

                            <div className="card-details">
                                <div className="card-name">{card.number}: {card.name}</div>
                                <div className="keywords">Keywords: {renderKeywords(card)}</div>
                                <div className="meaning">
                                    <div className="label">
                                        Light:
                                    </div>
                                    <ul>
                                        {card.meanings.light.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="meaning">
                                    <div className="label">
                                        Shadow:
                                    </div>
                                    <ul>
                                        {card.meanings.shadow.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="meaning">
                                    <div className="label">
                                        Questions to Ask Yourself
                                </div>
                                    <ul>
                                        {card.QuestionsToAsk.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div></div>}
                </div>

                :
                <div>Think on an issue you would like insight into while shuffling, when ready, Click Get Spread</div>}
        </div>

    )
}

export default TenCard;
