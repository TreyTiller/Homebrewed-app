import React from 'react';
import Header from '../Header'
import Tracker from '../BeanTracker';
import BrewGuideList from '../BrewGuide/BrewGuideList';

class MainList extends React.Component {
    render() {
        return(
           <div className="main">
        <Header />
        <Tracker />
        <BrewGuideList />
    </div>  
        )
    }
}

export default MainList;

