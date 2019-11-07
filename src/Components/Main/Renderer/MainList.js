import React from 'react';
import Header from '../Header'
import Tracker from '../BeanTracker';
import Cards from '../BrewCards';

class MainList extends React.Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Tracker />
                <Cards />
            </div>
        )
    }
}

export default MainList;

