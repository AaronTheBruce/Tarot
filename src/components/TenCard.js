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
                    <div className="cross">
                        <div className="none" />
                        <div className="conscious">
                            <div className="position_title">Conscious Thoughts</div>
                            <img className="ten_card_image"
                                alt={spread[3].name}
                                src={`images/cards/${spread[3].img}`}>
                            </img>
                            {/* <div>{spread[3].number} {spread[3].name}</div> */}
                        </div>
                        <div className="none" />
                        <div className="past">
                            <div className="position_title">Recent Past</div>
                            <img className="ten_card_image"
                                alt={spread[4].name}
                                src={`images/cards/${spread[4].img}`}>
                            </img>
                            {/* <div>{spread[4].number} {spread[4].name}</div> */}
                            </div>
                        <div className="situation">
                            <div className="position_title">Present By Problem</div>
                            <div className="present">
                                <img className="ten_card_image"
                                    alt={spread[0].name}
                                    src={`images/cards/${spread[0].img}`}>
                                </img>
                                {/* <div>{spread[0].number} {spread[0].name}</div> */}
                            </div>
                            <div className="problem">
                                <img className="ten_card_image"
                                    alt={spread[1].name}
                                    src={`images/cards/${spread[1].img}`}>
                                </img>
                                {/* <div>{spread[1].number} {spread[1].name}</div> */}
                            </div>
                        </div>
                        <div className="future">
                            <div className="position_title">Near Future</div>
                            <img className="ten_card_image"
                                alt={spread[5].name}
                                src={`images/cards/${spread[5].img}`}>
                            </img>
                            {/* <div>{spread[5].number} {spread[5].name}</div> */}
                        </div>
                        <div className="none" />
                        <div className="unconscious">
                            <div className="position_title">Unconscious Thoughts</div>
                            <img className="ten_card_image"
                                alt={spread[3].name}
                                src={`images/cards/${spread[3].img}`}>
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
                                src={`images/cards/${spread[9].img}`}>
                            </img>
                            {/* <div>{spread[9].number} {spread[9].name}</div> */}
                        </div>
                        <div className="hopes_and_fears">
                            <div className="position_title">Hopes and Fears</div>
                            <img className="ten_card_image"
                                alt={spread[8].name}
                                src={`images/cards/${spread[8].img}`}>
                            </img>
                            {/* <div>{spread[8].number} {spread[8].name}</div> */}
                        </div>
                        <div className="ext_influence">
                            <div className="position_title">Your Environment</div>
                            <img className="ten_card_image"
                                alt={spread[7].name}
                                src={`images/cards/${spread[7].img}`}>
                            </img>
                            {/* <div>{spread[7].number} {spread[7].name}</div> */}
                        </div>
                        <div className="your_influence">
                            <div className="position_title">Your Self</div>
                            <img className="ten_card_image"
                                alt={spread[6].name}
                                src={`images/cards/${spread[6].img}`}>
                            </img>
                            {/* <div>{spread[6].number} {spread[6].name}</div> */}
                        </div>
                    </div>
                </div>
                :
                <div>Shuffle and Draw</div>}
        </div>

    )
}

export default TenCard;
