import React from 'react';
import Logo from '../../HomeBrewed-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import { Button } from '../../Components/Utils/Utils'


class HeaderDash extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    render() {
        return (
            <header>
            <nav className="dash">
                    <Link
                        to='/login'>
                        <Button onClick={this.handleLogoutClick} className="nav">Logout</Button>
                    </Link>
                    <Link 
                        to="/add-brew" >
                        <Button className="nav" >Add Brew</Button>
                    </Link>
                </nav>
                <Link to="/dashboard" className="logo">
                    <img src={Logo} alt="logo" className="dash_img" />
                </Link>

            </header>
        )
    }
}

export default HeaderDash;