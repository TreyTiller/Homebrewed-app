import React from 'react';
import HeaderBack from '../../Header/Header-Back';
import NewBrewForm from '../NewBrewForm/NewBrewForm';

class NewBrew extends React.Component {
    render() {
        return (
            <div>
                <HeaderBack />
                <NewBrewForm history={this.props.history} />
            </div>
        )
    }
}

export default NewBrew;