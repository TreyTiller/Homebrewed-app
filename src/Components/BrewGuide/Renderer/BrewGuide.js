import React from 'react';
import Header from '../Header/Header';
import TempSelector from '../TempSelector';
import Guide from '../Guide';

class BrewGuide extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <TempSelector />
                <Guide />
            </div>
        )
    }
}

export default BrewGuide;