import React from 'react';
import Guide from '../Guide';
import Stopwatch from '../Stopwatch';
import HeaderBack from '../../Header/Header-Back';

class BrewGuide extends React.Component {
    render() {
        return(
            <div>
                <HeaderBack />
                <Guide />
                <Stopwatch />
            </div>
        )
    }
}

export default BrewGuide;