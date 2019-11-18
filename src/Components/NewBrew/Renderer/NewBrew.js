import React from 'react';
import HeaderBack from '../../Header/Header-Back';
import NewBrewFrom from '../NewBrewForm/NewBrewForm';

class NewBrew extends React.Component {
    render() {
        return (
            <div>
                <HeaderBack />
                <NewBrewFrom />
            </div>
        )
    }
}

export default NewBrew;