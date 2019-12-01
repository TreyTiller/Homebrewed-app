import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from '../Utils/Utils';


class HeaderBack extends React.Component {

    render() {
        return (
            <header className="back">
                <nav class="dash">
                    <Link
                        to='/dashboard'>
                        <Button className="nav">Back</Button>
                    </Link>
                </nav>
                <Link to="/dashboard" className="logo">
                    <img src={Logo} alt="logo" className="dash_img" />
                </Link>
            </header>
        )
    }
}

export default HeaderBack;