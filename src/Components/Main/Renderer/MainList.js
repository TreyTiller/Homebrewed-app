import React from 'react';
import Header from '../Header'
import Cards from '../BrewCards/BrewCards';

class MainList extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Cards />
            </div>
        )
    }
}

export default MainList;

