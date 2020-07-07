import Tarot from '../data/datasets_tarot-images.json';


export const getDeck = () => {
    const deck = Object.values(Tarot.cards);
    return deck;
}

// Fisher-Yates Shuffle
export const spliceShuffle = (deck) => {
    let count = deck.length;
    let temp;
    while (count) {
        temp = deck.splice(Math.floor(Math.random() * count), 1);
        deck.splice(count, 0, temp[0]);
        count--;
    }
    return deck;
}
// moves the card in order to the bottom of the deck, fisher-yates variant
export const stackSuffle = (deck) => {
    let count = deck.length;
    while (count) {
        deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
        count--;
    }
    return deck;
}

// Riffle Shuffle
export const riffleShuffle = (deck) => {
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
    return deck;
}

export const renderKeywords = (card) => {
    const keywords = card.keywords;
    let keywordString = '';
    for (let i = 0; i < keywords.length; i++) {
        let keyword = keywords[i];
        if (i === keywords.length - 1) keywordString += keyword;
        else keywordString += keyword + ', '
    }
    return keywordString.trim();
}

export const getCard = (deck) => {
    // gets the first card on top of the deck and removes it from the deck
    let drawnCard = deck.splice(0, 1);
    return drawnCard[0];
}

export const getSpread = (deck, num) => {
    let thisSpread = [];
    for (let i = 0; i < num; i++) {
        thisSpread.push(deck[i]);
    }
    return thisSpread;
}
