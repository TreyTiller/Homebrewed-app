import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>HomeBrewed</h1>
                <Link to="/login">Skip</Link>
            </header>
        )
    }
}

export default Header;