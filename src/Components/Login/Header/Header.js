import React from 'react';
import Logo from '../../../../src/HomeBrewed-logo.png';
import './Header.css';


class Header extends React.Component {
    render() {
        return(
            <header>
                <img src={ Logo } alt="logo" />
            </header>
        )
    }
}

export default Header;