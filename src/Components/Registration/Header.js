import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/login"><button>Back</button></Link>
                <img src={ Logo } alt="logo" />
                <Link to="/dashboard"><button>Demo</button></Link>
            </header>
        )
    }
}

export default Header;