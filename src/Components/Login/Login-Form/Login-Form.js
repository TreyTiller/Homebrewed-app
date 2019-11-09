import React from 'react';
import { Link } from 'react-router-dom';
import './Login-Form.css';


class LoginForm extends React.Component {

    demoAlert = () => {
        alert("No actionas will be saved during this session. Please register to use full features! or don't... whatever")
    }

    render() {
        return(
            <div className="form">
                <form>
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <Link to="/dashboard"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                    <Link to="/dashboard"><button onClick={this.demoAlert}>Demo</button></Link>
                </form>
            </div>
        )
    }
}

export default LoginForm;