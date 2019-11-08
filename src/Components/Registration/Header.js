import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/login">Back</Link>
                <h1>HomeBrewed</h1>
                <Link to="/dashboard">Demo</Link>
            </header>
        )
    }
}

export default Header;