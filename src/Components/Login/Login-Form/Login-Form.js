import React from 'react';
import { Link } from 'react-router-dom';
import './Login-Form.css';


class LoginForm extends React.Component {
    render() {
        return(
            <div className="form">
                <form>
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <Link to="/dashboard"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                    <Link to="/dashboard"><button>Demo</button></Link>
                </form>
            </div>
        )
    }
}

export default LoginForm;