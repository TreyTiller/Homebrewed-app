import React from 'react';



class Header extends React.Component {
    render() {
        return(
            <header>
                <hr></hr>
                <button>Back</button>
                <h1>HomeBrewed</h1>
                <button>Add New Brew</button>
            </header>
        )
    }
}

export default Header;