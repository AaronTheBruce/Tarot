import React, { useState, useEffect } from 'react'
import Tarot from '../data/datasets_tarot-images.json';
// import CardArtUrl from '../data/images/cards';

const SingleCard = () => {
    const [tarotDeck, setTarotDeck] = useState(null);
    const [card, setCard] = useState(null);
    // const [errors, setErrors] = useState([]);

    // Trump has 21 cards, each lesser has 14
    // get a Deck and set the Tarot Deck's state with it.
    const getDeck = () => {
        const deck = Object.values(Tarot.cards);
        // console.log(deck.length);
        setTarotDeck(deck);
    }

    useEffect(() => {
        if (!tarotDeck) {
            getDeck();
        } else {
            return;
        }
    })

    // Fisher-Yates Shuffle
    const spliceShuffle = (deck) => {
        let count = deck.length;
        let temp;
        while (count) {
            temp = deck.splice(Math.floor(Math.random() * count), 1);
            deck.splice(count, 0, temp[0]);
            count--;
        }
        setTarotDeck(deck);
        // console.log(deck);
    }
    // moves the card in order to the bottom of the deck, fisher-yates variant
    const stackSuffle = (deck) => {
        let count = deck.length;
        while (count) {
            deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
            count--;
        }
        setTarotDeck(deck);
        // console.log(deck);
    }

    // Riffle Shuffle
    const riffleShuffle = (deck) => {
        // split the deck in half and provide a variance in content count
        const cutDeckVariant = deck.length / 2 + Math.floor(Math.random() * 9) - 4;
        // specify the contents of left Half
        const leftHalf = deck.splice(0, cutDeckVariant);
        let leftCount = leftHalf.length;
        // specify the contents of the Right Half
        let rightCount = deck.length - Math.floor(Math.random() * 4);
        // Riffle the two decks together
        while (leftCount > 0) {
            const takeAmount = Math.floor(Math.random() * 4);
            deck.splice(rightCount, 0, ...leftHalf.splice(leftCount, takeAmount));
            leftCount -= takeAmount;
            rightCount = rightCount - Math.floor(Math.random() * 4) + takeAmount;
        }
        // combine any outliers
        deck.splice(rightCount, 0, ...leftHalf);
        setTarotDeck(deck);
        // console.log(deck);
    }
    // pick a random major arcana card (bonus)
    const getCard = () => {
        // gets the first card on top of the deck
        setCard(tarotDeck[0]);
        // console.log(tarotDeck[0]);
    }

    const renderKeywords = () => {
        const keywords = card.keywords;
        let keywordString = '';
        for (let i = 0; i < keywords.length; i++) {
            let keyword = keywords[i];
            if (i === keywords.length - 1) keywordString += keyword;
            else keywordString += keyword + ', '
        }
        return keywordString.trim();
    }

    return (
        <div>
            <h1>Single Card Component</h1>
            {card ?
                <div className="card">
                    {/* <div className="card-image" style={{backgroundImage: `url('../data/images/cards/${card.img}')`}}></div> */}
                    <div><img className="card-image" src={`images/cards/${card.img}`} alt={card.name} /></div>
                    <div className="card-details">
                        <div className="card-name">{card.number}: {card.name}</div>
                        <div className="keywords">Keywords: {renderKeywords()}</div>
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
                :
                <div>Card is null</div>}
            <div className="options">
                <button type="submit" onClick={() => spliceShuffle(tarotDeck)} >Fisher-Yates Shuffle</button>
                <button type="submit" onClick={() => stackSuffle(tarotDeck)} >Stack Shuffle</button>
                <button type="submit" onClick={() => riffleShuffle(tarotDeck)} >Riffle Shuffle</button>
                <button type="submit" onClick={() => getCard(tarotDeck)} >Draw Card</button>
            </div>
        </div>
    )
}

export default SingleCard;
