import React from 'react';
import Logo from '../../Images/HomeBrewed-logo.png';
import './Header.css';


class HeaderLocked extends React.Component {
    render() {
        return (
            <header>
                <img src={Logo} alt="logo" className="login_img" />
            </header>
        )
    }
}

export default HeaderLocked;