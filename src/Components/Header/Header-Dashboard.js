import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'


class HeaderDash extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    render() {
        return (
            <header>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/login'>
                        <button>Logout</button>
                </Link>
                <Link to="/dashboard">
                    <img src={Logo} alt="logo" />
                </Link>
                <Link to="/add-brew">
                    <button>Add Brew</button>
                </Link>
            </header>
        )
    }
}

export default HeaderDash;