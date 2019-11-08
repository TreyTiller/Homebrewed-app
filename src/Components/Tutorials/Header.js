import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <Header>
                <h1>HomeBrewed</h1>
                <Link to="/login">Skip</Link>
            </Header>
        )
    }
}

export default Header;