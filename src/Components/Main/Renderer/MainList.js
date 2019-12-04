import React from 'react';
import HeaderDash from '../../Header/Header-Dashboard';
import Cards from '../BrewCards/BrewCards';

class MainList extends React.Component {
    render() {
        return (
            <div className="main">
                <HeaderDash />
                <Cards />
            </div>
        )
    }
}

export default MainList;

