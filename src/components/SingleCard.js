import React, { useState, useEffect } from 'react'
import { getDeck, getCard, spliceShuffle, stackSuffle, riffleShuffle, renderKeywords } from '../utils/scripts.js';

const SingleCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [card, setCard] = useState(null);
    // const [errors, setErrors] = useState([]);

    const getThisDeck = () => {
        setTarotDeck(getDeck());
    }

    useEffect(() => {
        if (!tarotDeck) {
            getThisDeck();
        } else {
            return;
        }
    });

    const shuffle = () => {
        setTarotDeck(riffleShuffle(tarotDeck));
        setTarotDeck(spliceShuffle(tarotDeck));
        setTarotDeck(stackSuffle(tarotDeck));
    }

    // pick a random major arcana card (bonus)
    const getThisCard = () => {
        // gets the first card on top of the deck and removes it from the deck
        setCard(getCard(tarotDeck));
    }

    return (
        <div>
            <div className="options">
                <button className="button button1" onClick={() => { setCard(null); shuffle() }} >Shuffle</button>
                <button className="button button1" onClick={() => { getThisDeck(); setCard(null) }} >Reset</button>
                <button className="button button1" onClick={() => getThisCard()} >Draw Card</button>
                <div className="tips">
                    <h3>Helpful Tips</h3>
                    <ul>
                        <li>
                            Cards are default in order for exploration, so don't forget to shuffle!
                        </li>
                        <li>
                            Shuffle preforms 3 different shuffles with each click to the Suffle button
                        </li>
                        <li>
                            Reset puts all the cards back in the deck in order
                        </li>
                        <li>
                            Draw Card draws the first card on the top of the deck
                        </li>
                    </ul>
                </div>
            </div>
            {card ?
                <div className="card">
                    <div><img className="card-image" src={`images/cards/${card.img}`} alt={card.name} /></div>
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
                <div className="prompt">Cards are in order by default; Shuffle and Draw a Card</div>}
        </div>
    )
}

export default SingleCard;
