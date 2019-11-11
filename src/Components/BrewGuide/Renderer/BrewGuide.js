import React from 'react';
import Header from '../Header/Header';
import TempSelector from '../TempSelector';
import Guide from '../Guide';
import Stopwatch from '../Stopwatch';

class BrewGuide extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <TempSelector />
                <Guide />
                <Stopwatch />
            </div>
        )
    }
}

export default BrewGuide;