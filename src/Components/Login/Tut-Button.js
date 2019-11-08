import React from 'react';
import { Link } from 'react-router-dom';


class TutButton extends React.Component {
    render() {
        return(
            <div>
                <Link to="/">Tutorial</Link>
                <hr></hr>
            </div>
        )
    }
}

export default TutButton;