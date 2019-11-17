import React from 'react';
import Header from '../../Header/Header';
import NewBrewFrom from '../NewBrewForm/NewBrewForm';

class NewBrew extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NewBrewFrom />
            </div>
        )
    }
}

export default NewBrew;