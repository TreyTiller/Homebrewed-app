import React from 'react';
import { Link } from 'react-router-dom';

class Tracker extends React.Component {
    render() {
        return (
            <div>
                <Link to="/roast-info">
                    <p>Visual progress bar will go here to track roast freshness</p>
                </Link>
            </div>
        )
    }
}

export default Tracker;
