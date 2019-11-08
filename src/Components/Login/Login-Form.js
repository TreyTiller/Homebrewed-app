import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    render() {
        return(
            <div className="form">
                <form>
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <Link to="/dashboard">Login</Link>
                </form>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Demo</Link>
            </div>
        )
    }
}

export default LoginForm;