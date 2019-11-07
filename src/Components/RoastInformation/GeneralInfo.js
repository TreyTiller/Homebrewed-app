import React from 'react';

class GeneralInfo extends React.Component {
    render() {
        return(
            <div>
                <h2>Ethiopia Harrar</h2>
                <h4>Country of Origin: Ethiopia</h4>
                <h4>Roast Date: 11/1</h4>
                <p>Progress bar depiction of expiration time frame goes here</p>
                <h4>Flavor Profile:</h4>
                <ul>
                    <li>Nutty</li>
                    <li>Chocolate</li>
                    <li>Lemongrass</li>
                </ul>
                <button>It's All Gone</button>
            </div>
        )
    }
}

export default GeneralInfo;