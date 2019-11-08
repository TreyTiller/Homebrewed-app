import React from 'react';
import { Link } from 'react-router-dom';
import './Tut-Button.css';


class TutButton extends React.Component {
    render() {
        return(
            <div>
                <Link to="/"><button>Tutorial</button></Link>
            </div>
        )
    }
}

export default TutButton;