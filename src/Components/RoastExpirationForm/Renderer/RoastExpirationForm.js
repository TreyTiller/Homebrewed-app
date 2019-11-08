import React from 'react';
import Header from '../Header';
import RoastForm from '../RoastForm';

class RoastExpiration extends React.Component {
    render() {
        return(
            <div className="renderer">
                <Header />
                <RoastForm />
            </div>
        )
    }
}

export default RoastExpiration;