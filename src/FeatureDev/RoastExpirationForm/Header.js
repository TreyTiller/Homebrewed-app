import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/roast-info"><button>back</button></Link>
                <img src={Logo} alt="logo" />
                <button>Learn More</button>
            </header>
        )
    }
}

export default Header;