import React from 'react';
import Header from '../Header/Header';
import Guide from '../Guide';
import Stopwatch from '../Stopwatch';

class BrewGuide extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Guide />
                <Stopwatch />
            </div>
        )
    }
}

export default BrewGuide;