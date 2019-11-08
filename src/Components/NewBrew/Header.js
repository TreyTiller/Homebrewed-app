import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/dashboard"><button>Back</button></Link>
                <img src={Logo} alt="logo" />
            </header>
        )
    }
}

export default Header;