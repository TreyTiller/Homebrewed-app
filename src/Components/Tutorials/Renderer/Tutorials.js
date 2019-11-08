import React from 'react';
import Header from '../Header/Header';
import Cards from '../Cards';

class Tutorials extends React.Component {
    render() {
        return(
            <div className="renderer">
                <Header />
                <Cards />
            </div>
        )
    }
}

export default Tutorials;