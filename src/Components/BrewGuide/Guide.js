import React from 'react';

class Guide extends React.Component {
    render() {
        return (
            <div className="guide-list">
                <h2>Title</h2>
                <h4>Set Up:</h4>
                <ul className="tools">
                    <li>24 Grams of ground coffee</li>
                    <li>375 Grams water</li>
                    <li>Clever Dripper</li>
                    <li>Scale</li>
                    <li>4:00 Timer</li>
                    <li>#2 Paper filter</li>
                </ul>
                <h4>Directions:</h4>
                <ul className="directions">
                    <li>Grind beans slightly courser than drip grind.</li>
                    <li>Fold perferated edges of paper filter and place snuggly into the clever dripper</li>
                    <li>Pour in ground coffee and tare scale</li>
                    <li>Gently pour in 50 Grams of water and wait 30 secs</li>
                    <li>Pour the rest of the water in, up to 375 Grams, and wait for another 2 minutes.</li>
                    <li>When the timer reaches 2:30 place clever ontop of mug and wait until the timer gets to 4 minutes</li>
                </ul>
            </div>
        )
    }
}

export default Guide;