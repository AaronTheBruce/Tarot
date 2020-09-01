import React, { useState, useEffect } from 'react'
import { getDeck, getSpread, spliceShuffle, stackSuffle, riffleShuffle, renderKeywords } from '../utils/scripts.js';

const ThreeCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [spread, setSpread] = useState(null);
    const [card, setCard] = useState(null);
    const [hasShuffled, setHasShuffled] = useState(null);

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
        setHasShuffled(true);
    }

    const getThisSpread = (num) => {
        if (!hasShuffled) shuffle();
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

    return (
        <div>
            <div className="options">
                <button className="button button1" type="submit" onClick={() => shuffle()} >Shuffle</button>
                <button className="button button1" type="submit" onClick={() => getThisSpread(3)} >Get Spread</button>
                <button className="button button1" type="submit" onClick={() => { setSpread(null); setTarotDeck(null) }} >Reset</button>
            </div>
            {
                spread ?
                    <div className="three_spread">
                        <div className="three_spread_card">
                            <div className="position_title">Action to Avoid</div>
                            <img className={"three_card_image inverted"}
                                id={spread[0].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                alt={spread[0].name}
                                onClick={() => {
                                    (spread[1].inverted) ? document.getElementById(spread[0].name).classList.add('inverted') : document.getElementById(spread[0].name).classList.remove('inverted');
                                    document.getElementById(spread[0].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[0].name).src = `images/cards/${spread[0].img}` :
                                        cardHandler(0);
                                }}
                            />
                            <div className="position_title">The Situation</div>
                            <img className={"three_card_image inverted"}
                                id={spread[1].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                alt={spread[1].name}
                                onClick={() => {
                                    (spread[1].inverted) ? document.getElementById(spread[1].name).classList.add('inverted') : document.getElementById(spread[1].name).classList.remove('inverted');
                                    document.getElementById(spread[1].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[1].name).src = `images/cards/${spread[1].img}` :
                                        cardHandler(1);
                                }}
                            />
                            <div className="position_title">Action to Take</div>
                            <img className={"three_card_image inverted"}
                                id={spread[2].name}
                                src={`images/cards/tarot-card-back.JPG`}
                                alt={spread[2].name}
                                onClick={() => {
                                    (spread[2].inverted) ? document.getElementById(spread[2].name).classList.add('inverted') : document.getElementById(spread[2].name).classList.remove('inverted');
                                    document.getElementById(spread[2].name).src.includes(`images/cards/tarot-card-back.JPG`) ?
                                        document.getElementById(spread[2].name).src = `images/cards/${spread[2].img}` :
                                        cardHandler(2);
                                }}
                            />
                        </div>
                        {card ?
                            <div className="card">
                                {!card.inverted ?
                                    <img className="focused-card-image"
                                        src={`images/cards/${card.img}`}
                                        alt={card.name} />
                                    :
                                    <img className="focused-card-image inverted"
                                        src={`images/cards/${card.img}`}
                                        alt={card.name} />
                                }

                                <div className="card-details">
                                    <div className="card-name">{card.number}: {card.name}</div>
                                    <div className="keywords">Keywords: {renderKeywords(card)}</div>
                                    <div className="meaning">
                                        <div className="label">
                                            Meaning:
                                    </div>
                                        {!card.inverted ?
                                            <ul>
                                                {card.meanings.light.map(item => <li key={item}>{item}</li>)}
                                            </ul>
                                            :
                                            <ul>
                                                {card.meanings.shadow.map(item => <li key={item}>{item}</li>)}
                                            </ul>
                                        }
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
                    <div className="prompt">Hold a Question in your mind while you Shuffle and Draw a Spread when you feel ready</div>
            }
        </div>

    )
}

export default ThreeCard;
