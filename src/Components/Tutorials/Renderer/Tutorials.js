import React from 'react';
import HeaderLocked from '../../Header/Header-Locked';
import Tuts from '../Tuts';


class Tutorials extends React.Component {
    render() {
        return (
            <div className="renderer">
                <HeaderLocked />
                <Tuts />
            </div>
        )
    }
}

export default Tutorials;