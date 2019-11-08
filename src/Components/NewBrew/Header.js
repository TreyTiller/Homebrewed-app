import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header>
                <hr></hr>
                <Link to="/dashboard">Back</Link>
                <h1>HomeBrewed</h1>
            </header>
        )
    }
}

export default Header;