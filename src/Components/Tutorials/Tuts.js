import React from 'react';
import { Link } from 'react-router-dom';
import './Tuts.css'

class Tut extends React.Component {
    render() {
        return (
            <div>
                <section className="upper">
                    <h1 className="welcome">Welcome to Homebrewed!</h1>
                    <hr className="welcome"></hr>
                    <h4 className="tagline">Your one stop guide to amazing home brewed coffee</h4>
                    <p className="routes">Please <Link to="/register">Sign Up</Link> or <Link to="/login">Log In</Link> to use, or check out the tutorial below for more details on the app!</p>
                </section>
                <hr className="lower"></hr>
                <section className="lower">
                    <p>Write a short description of the app</p>
                    <p>Do a small write up on how to use</p>
                    <p>Have a link to the repos</p>
                    <p>Have a list of any upcoming features</p>
                </section>
            </div>
        )
    }
}

export default Tut;

