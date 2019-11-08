import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/login">Log Out</Link>
                <img src={Logo} alt="logo" />
                <Link to="/add-brew">Add New Brew</Link>
            </header>
        )
    }
}

export default Header;