import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

class Tracker extends React.Component {
    render() {
        return (
            <div>
                <Link to="/roast-info">
                    <label>Freshness Tracker:</label>
                    <Line percent="45" strokeWidth="1.5" strokeColor="#C46210" />
                </Link>
            </div>
        )
    }
}

export default Tracker;
