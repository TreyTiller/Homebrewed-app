import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/dashboard">
                    <img src={ Logo } alt="logo" />
                </Link>
            </header>
        )
    }
}

export default Header;