import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';


class HeaderSkip extends React.Component {

    render() {
        return (
            <header>
                    <img src={Logo} alt="logo" className="login_img" />
                    <Link
                    to='/login'>
                        <button className="nav">Skip</button>
                </Link>
            </header>
        )
    }
}

export default HeaderSkip;