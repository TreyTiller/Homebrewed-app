import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../src/HomeBrewed-logo.png';
import './Header.css'

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/dashboard" ><button>Back</button></Link>
                <Link to="/dashboard"><img src={ Logo } alt="logo" /></Link>
            </header>
        )
    }
}

export default Header;