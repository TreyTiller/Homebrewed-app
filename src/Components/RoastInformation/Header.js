import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';



class Header extends React.Component {
    render() {
        return(
            <header>
                <hr></hr>
                <Link to="/dashboard"><button>Back</button></Link>
                <img src={Logo} alt="logo" />
                <Link to="/roast-form"><button>Add Beans</button></Link>
            </header>
        )
    }
}

export default Header;