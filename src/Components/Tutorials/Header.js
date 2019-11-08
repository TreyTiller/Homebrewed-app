import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <header>
                <img src={ Logo } alt="logo" />
                <Link to="/login"><button>Skip</button></Link>
            </header>
        )
    }
}

export default Header;