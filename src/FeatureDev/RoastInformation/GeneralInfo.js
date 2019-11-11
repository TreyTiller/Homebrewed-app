import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

class GeneralInfo extends React.Component {
    render() {
        return(
            <div>
                <h2>Ethiopia Harrar</h2>
                <h4>Country of Origin: Ethiopia</h4>
                <h4>Roast Date: 11/1</h4>
                <label>Freshness Tracker:</label>
                    <Line percent="45" strokeWidth="1.5" strokeColor="#C46210" />
                <h4>Flavor Profile:</h4>
                <ul>
                    <li>Nutty</li>
                    <li>Chocolate</li>
                    <li>Lemongrass</li>
                </ul>
                <Link to="/roast-form"><button>It's All Gone</button></Link>
            </div>
        )
    }
}

export default GeneralInfo;