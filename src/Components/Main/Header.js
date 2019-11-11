import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/login"><button>Log Out</button></Link>
                <Link to="/dashboard" ><img src={Logo} alt="logo" /></Link>
                <Link to="/add-brew"><button>Add New Brew</button></Link>
            </header>
        )
    }
}

export default Header;