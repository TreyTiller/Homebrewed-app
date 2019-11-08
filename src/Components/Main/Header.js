import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/login">Log Out</Link>
                <h1>HomeBrewed</h1>
                <Link to="/add-brew">Add New Brew</Link>
            </header>
        )
    }
}

export default Header;