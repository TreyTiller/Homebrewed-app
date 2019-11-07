import React from 'react';
import SuppliesList from '../NewBrewForm/SuppliesList';
import DirectionList from '../NewBrewForm/DirectionList';

class NewBrewForm extends React.Component {
    render() {
        return (
            <div className="new-brew-renderer">
                <SuppliesList />
                <DirectionList />
            </div>
        )
    }
}

export default NewBrewForm;