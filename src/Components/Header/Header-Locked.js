import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';


class HeaderLocked extends React.Component {
    render() {
        return(
            <header>
                    <img src={ Logo } alt="logo" />
            </header>
        )
    }
}

export default HeaderLocked;