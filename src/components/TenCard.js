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
        setSpread(null);
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

    const cardHandler = (index) => {
        if (card === spread[index]) {
            setCard(null);
        }
        else if (card !== spread[index]) {
            setCard(null);
            setCard(spread[index]);
        }
    }

    const shiftCard = (e) => {
        e.target.classList.toggle('problem')
    }

    return (
        <>
            <div className="options">
                <button className="button button1" type="submit" onClick={() => shuffle()}>Shuffle</button>
                <button className="button button1" type="submit" onClick={() => { getThisSpread(10); }} >Get Spread</button>
                <button className="button button1" type="submit" onClick={() => { setSpread(null); setTarotDeck(null); setCard(null); }}>Reset</button>
                {/* <button type="submit" onClick={() => { console.log(spread); }} >Log Spread</button>
                <button type="submit" onClick={() => { console.log(tarotDeck); }} >Log Deck</button> */}
            </div>
            {spread ?
                <div className="ten_spread">
                    <div className="cross">
                        <div className="none" />
                        <div className="conscious">
                            <div className="position_title">Conscious Thoughts</div>
                            <img className="ten_card_image"
                                id={spread[2].name}
                                alt={spread[2].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[2].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[2].name).src = `images/cards/${spread[2].img}` :
                                        cardHandler(2);
                                }}>
                            </img>
                            {/* <div>{spread[3].number} {spread[3].name}</div> */}
                        </div>
                        <div className="none" />
                        <div className="past">
                            <div className="position_title">Recent Past</div>
                            <img className="ten_card_image"
                                id={spread[4].name}
                                alt={spread[4].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[4].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[4].name).src = `images/cards/${spread[4].img}` :
                                        cardHandler(4);
                                }}>
                            </img>
                            {/* <div>{spread[4].number} {spread[4].name}</div> */}
                        </div>
                        <div className="situation">
                            <div className="position_title">Present By Problem</div>
                            {/* <div className="present"> */}
                            <img className="present ten_card_image"
                                id={spread[0].name}
                                alt={spread[0].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={(e) => {
                                    document.getElementById(spread[0].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[0].name).src = `images/cards/${spread[0].img}` :
                                        cardHandler(0);
                                }}>
                            </img>
                            {/* <div>{spread[0].number} {spread[0].name}</div> */}
                            {/* </div> */}
                            {/* <div className="problem"> */}
                            <img className="problem ten_card_image"
                                id={spread[1].name}
                                alt={spread[1].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={(e) => {
                                    document.getElementById(spread[1].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[1].name).src = `images/cards/${spread[1].img}` :
                                        cardHandler(1); shiftCard(e);
                                }}>
                            </img>
                            {/* <div>{spread[1].number} {spread[1].name}</div> */}
                            {/* </div> */}
                        </div>
                        <div className="future">
                            <div className="position_title">Near Future</div>
                            <img className="ten_card_image"
                                id={spread[5].name}
                                alt={spread[5].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={(e) => {
                                    document.getElementById(spread[5].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[5].name).src = `images/cards/${spread[5].img}` :
                                        cardHandler(5);
                                }}>
                            </img>
                            {/* <div>{spread[5].number} {spread[5].name}</div> */}
                        </div>
                        <div className="none" />
                        <div className="unconscious">
                            <div className="position_title">Unconscious Thoughts</div>
                            <img className="ten_card_image"
                                id={spread[3].name}
                                alt={spread[3].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[3].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[3].name).src = `images/cards/${spread[3].img}` :
                                        cardHandler(3);
                                }}>
                            </img>
                            {/* <div>{spread[3].number} {spread[3].name}</div> */}
                        </div>
                        <div className="none" />
                    </div>
                    <div className="spear">
                        <div className="outcome">
                            <div className="position_title">Final Outcome</div>
                            <img className="ten_card_image"
                                id={spread[9].name}
                                alt={spread[9].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[9].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[9].name).src = `images/cards/${spread[9].img}` :
                                        cardHandler(9);
                                }}>
                            </img>
                            {/* <div>{spread[9].number} {spread[9].name}</div> */}
                        </div>
                        <div className="hopes_and_fears">
                            <div className="position_title">Hopes and Fears</div>
                            <img className="ten_card_image"
                                id={spread[8].name}
                                alt={spread[8].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[8].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[8].name).src = `images/cards/${spread[8].img}` :
                                        cardHandler(8);
                                }}>
                            </img>
                            {/* <div>{spread[8].number} {spread[8].name}</div> */}
                        </div>
                        <div className="ext_influence">
                            <div className="position_title">Your Environment</div>
                            <img className="ten_card_image"
                                id={spread[7].name}
                                alt={spread[7].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[7].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[7].name).src = `images/cards/${spread[7].img}` :
                                        cardHandler(7);
                                }}>
                            </img>
                            {/* <div>{spread[7].number} {spread[7].name}</div> */}
                        </div>
                        <div className="your_influence">
                            <div className="position_title">Your Self</div>
                            <img className="ten_card_image"
                                id={spread[6].name}
                                alt={spread[6].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                onClick={() => {
                                    document.getElementById(spread[6].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[6].name).src = `images/cards/${spread[6].img}` :
                                        cardHandler(6);
                                }}>
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
                <div className="prompt">Think on an issue you would like insight into while shuffling, when ready, Click Get Spread</div>}
        </>
    )
}

export default TenCard;
