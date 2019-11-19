import React from 'react';
import HeaderSkip from '../../Header/Header-Skip';
import Cards from '../Cards';


class Tutorials extends React.Component {
    render() {
        return(
            <div className="renderer">
                <HeaderSkip />
                <Cards />
            </div>
        )
    }
}

export default Tutorials;