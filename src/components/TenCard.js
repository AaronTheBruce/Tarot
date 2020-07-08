import React, { useState, useEffect } from 'react'
import { getDeck, getSpread, spliceShuffle, stackSuffle, riffleShuffle, renderKeywords } from '../utils/scripts.js';

const TenCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [spread, setSpread] = useState(null)

    const getThisDeck = () => {
        setTarotDeck(getDeck());
    }

    const shuffle = () => {
        setTarotDeck(riffleShuffle(tarotDeck));
        setTarotDeck(spliceShuffle(tarotDeck));
        setTarotDeck(stackSuffle(tarotDeck));
    }

    const getThisSpread = (num) => {
        riffleShuffle(tarotDeck);
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
        <div className="options">
            <button type="submit" onClick={() => shuffle()}>Shuffle</button>
            <button type="submit" onClick={() => { setSpread(null); setTarotDeck(null) }}>Reset</button>
            <button type="submit" onClick={() => { getThisSpread(10); console.log(spread); }} >Get Spread</button>
            <div>
                Tips:
                <ul>
                    <li>Shuffle will shuffle the deck 3 times</li>
                    <li>Reset will set the deck in order</li>
                    <li>Get Spread shuffles once and lays out a 3 card spread</li>
                </ul>
            </div>
            {spread ?
                <div className="ten_spread">
                    {/* <div className="filler" /> */}
                    <div className="cross">
                        <div className="none" />
                        <div className="conscious"><img className="ten_card_image" src={`images/cards/${spread[4].img}`}></img></div>
                        <div className="none" />
                        <div className="past"><img className="ten_card_image" src={`images/cards/${spread[2].img}`}></img></div>
                        <div className="situation">
                            <div className="present"><img className="ten_card_image" src={`images/cards/${spread[0].img}`}></img></div>
                            <div className="problem"><img className="ten_card_image" src={`images/cards/${spread[1].img}`}></img></div>
                        </div>
                        <div className="future"><img className="ten_card_image" src={`images/cards/${spread[3].img}`}></img></div>
                        <div className="none" />
                        <div className="unconscious"><img className="ten_card_image" src={`images/cards/${spread[5].img}`}></img></div>
                        <div className="none" />
                    </div>
                    <div className="spear">
                        <div className="your_influence"><img className="ten_card_image" src={`images/cards/${spread[6].img}`}></img></div>
                        <div className="ext_influence"><img className="ten_card_image" src={`images/cards/${spread[7].img}`}></img></div>
                        <div className="hopes_and_fears"><img className="ten_card_image" src={`images/cards/${spread[8].img}`}></img></div>
                        <div className="outcome"><img className="ten_card_image" src={`images/cards/${spread[9].img}`}></img></div>
                    </div>
                </div>
                :
                <div>Shuffle and Draw</div>}
        </div>

    )
}

export default TenCard;
