import React, { useState, useEffect } from 'react'
import { getDeck, getSpread, spliceShuffle, stackSuffle, riffleShuffle, renderKeywords } from '../utils/scripts.js';

const ThreeCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [spread, setSpread] = useState(null);

    const getThisDeck = () => {
        setTarotDeck(getDeck());
    }

    const shuffle = () => {
        setTarotDeck(riffleShuffle(tarotDeck));
        setTarotDeck(spliceShuffle(tarotDeck));
        setTarotDeck(stackSuffle(tarotDeck));
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

    return (
        <div>
            {spread ?
                <div className="three_spread">
                    {spread.map((card, i) =>
                        <div className="card">
                            <div><img className="three_card_image" src={`images/cards/${card.img}`} alt={card.name} /></div>
                            <div className="card-details">
                                <div className="card-name">{card.number}: {card.name}</div>
                                <div className="keywords">Keywords: {renderKeywords(card)}</div>
                                <div className="meaning-light">
                                    <div className="label">
                                        Light:
                                </div>
                                    <ul>
                                        {card.meanings.light.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="meaning-dark">
                                    <div className="label">
                                        Shadow:
                                </div>
                                    <ul>
                                        {card.meanings.shadow.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className="prompt">Shuffle and Draw a Spread</div>}
            <button type="submit" onClick={() => getThisSpread(3)} >Get Spread</button>
            <button type="submit" onClick={() => console.log(spread)} >Spread?</button>
        </div>
    )
}

export default ThreeCard;
