import React from 'react'

const Tips = () => {
    return (
        <div className="tips">
            <h1>Usage Tips</h1>
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
                    Draw Card/Spread draws from the top of the deck
                </li>
            </ul>
            <h1>Spread Tips</h1>
            <ul>
                <li>The Single Card spread is meant for deck exploration, but it can also aid in insight when applying card meaning to issues you are currently concern</li>
                <li>Both the Three and Ten card spreads layout cards face-down. Click the cards to flip them face up</li>
                <li>When the cards turn face-up, you can click them again to bring up details for the selected card</li>
            </ul>
        </div>
    )
}

export default Tips;
