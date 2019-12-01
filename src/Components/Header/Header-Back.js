import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';


class HeaderBack extends React.Component {

    render() {
        return (
            <header className="back">
                <Link
                    to='/dashboard'>
                        <Button>Back</Button>
                </Link>
                <Link to="/dashboard">
                    <img src={Logo} alt="logo" className="dash_img" />
                </Link>
            </header>
        )
    }
}

export default HeaderBack;