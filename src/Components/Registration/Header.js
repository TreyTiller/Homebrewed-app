import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/HomeBrewed-logo.png';

class Header extends React.Component {

    demoAlert = () => {
        alert("No actionas will be saved during this session. Please register to use full features! or don't... whatever");
    }

    render() {
        return(
            <header>
                <Link to="/login"><button>Back</button></Link>
                <img src={ Logo } alt="logo" />
                <Link to="/dashboard"><button onClick={this.demoAlert}>Demo</button></Link>
            </header>
        )
    }
}

export default Header;