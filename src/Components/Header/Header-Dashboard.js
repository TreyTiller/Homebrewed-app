import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import { Button, Input } from '../../Components/Utils/Utils'


class HeaderDash extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    render() {
        return (
            <header className="dash">
                <Link
                    to='/login'>
                        <Button onClick={this.handleLogoutClick} className="dash_nav">Logout</Button>
                </Link>
                <Link to="/dashboard">
                    <img src={Logo} alt="logo" className="dash_img"/>
                </Link>
                <Link to="/add-brew">
                    <Button className="dash_nav">Add Brew</Button>
                </Link>
            </header>
        )
    }
}

export default HeaderDash;