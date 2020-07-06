import React, {useState} from 'react'
import Tarot from '../../data/datasets_tarot-images.json';

const SingleCard = () => {
    const [tarotCard, setTarotCard] = useState(null);
    const [errors, setErrors] = useState([]);

    // pick a random card
    const getRandomCard = () => {
        // randomly select a suit, randomly select 1 card from that suit
        // Trump has 21 cards, each lesser has 14
        const suits = ['Trump', 'Cups', 'Swords', 'Wands', 'Pentacles'];
        /**
         * Idea: I could randomly grab 1 suit, and randomly grap 1 of its members..
         * However, to maintain the essence of tarot, I would shuffle the deck and directly
         * draw any cards needed for the spread. Assuming I'm not choosing from deck cuts.
         *
         * Question: What are the pros and cons of each approach?
         */
    }
    // pick a random major arcana card (bonus)


    return (
        <div>
            <h1>Single Card Component</h1>
        </div>
    )
}

export default SingleCard;
