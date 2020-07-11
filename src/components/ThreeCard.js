import React, { useState, useEffect } from 'react'
import { getDeck, getSpread, spliceShuffle, stackSuffle, riffleShuffle, renderKeywords } from '../utils/scripts.js';

const ThreeCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [spread, setSpread] = useState(null);
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

    return (
        <div>
            <div className="options">
                <button className="button button1" type="submit" onClick={() => shuffle()} >Shuffle</button>
                <button className="button button1" type="submit" onClick={() => getThisSpread(3)} >Get Spread</button>
                {/* <button className="button button1" type="submit" onClick={() => console.log(spread)} >Log Spread</button>
                <button className="button button1" type="submit" onClick={() => console.log(tarotDeck)} >Log Deck</button> */}
                <button className="button button1" type="submit" onClick={() => { setSpread(null); setTarotDeck(null) }} >Reset</button>
            </div>
            {
                spread ?
                    <div className="three_spread">
                        {spread.map((card, i) =>
                            <div className="three_spread_card" key={card.name}>
                                {i === 0 ? <div>Action to Avoid</div> :
                                    i === 1 ? <div>The Situation</div> :
                                        <div>Action to Take</div>}
                                {/* {card.inverted ?
                                    <img className={"three_card_image inverted"}
                                        id={card.name}
                                        src={`images/cards/tarot-card-back.JPG`}
                                        alt={card.name}
                                        onClick={() => { document.getElementById(card.name).src = `images/cards/${card.img}`; }}
                                    />
                                    :
                                    <img className={"three_card_image"}
                                        id={card.name}
                                        src={`images/cards/tarot-card-back.JPG`}
                                        alt={card.name}
                                        onClick={() => { document.getElementById(card.name).src = `images/cards/${card.img}`; }}
                                    />
                                } */}
                                <img className={"three_card_image inverted"}
                                    id={card.name}
                                    src={`images/cards/tarot-card-back.JPG`}
                                    alt={card.name}
                                    onClick={() => { document.getElementById(card.name).src = `images/cards/${card.img}`; (card.inverted) ? document.getElementById(card.name).classList.add('inverted') : document.getElementById(card.name).classList.remove('inverted') }}
                                />
                                <div className="three_card_details">
                                    <div className="three_card_name">{card.number}: {card.name}</div>
                                    <div className="three_card_keywords">Keywords: <div>{renderKeywords(card)}</div></div>
                                    <div className="three_card_fortune_telling">
                                        <ul>
                                            {card.fortune_telling.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <div className="prompt">Hold a Question in your mind while you Shuffle and Draw a Spread when you feel ready</div>
            }
        </div>

    )
}

export default ThreeCard;
