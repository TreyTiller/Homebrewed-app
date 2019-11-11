import React from 'react';
import Header from '../Header';
import GeneralInfo from '../GeneralInfo';

class RoastInfo extends React.Component {
    render() {
        return(
            <div className="renderer">
                <Header />
                <GeneralInfo />
            </div>
        )
    }
}

export default RoastInfo;