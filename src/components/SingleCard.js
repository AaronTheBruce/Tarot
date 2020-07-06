import React from 'react'
import Tarot from '../../data/datasets_tarot-images.json';

const SingleCard = () => {
    const [tarotCard, setTarotCard] = useState(null);
    const [errors, setErrors] = useState([]);

    // pick a random card
    const getRandomCard = () => {
        // randomly select a suit, randomly select 1 card from that suit
        // Trump has 21 cards, each lesser has 14
        const suits = ['Trump', 'Cups', 'Swords', 'Wands', 'Pentacles']
    }
    // pick a random major arcana card (bonus)


    return (
        <div>

        </div>
    )
}
