import React from 'react';


class LoginForm extends React.Component {
    render() {
        return(
            <div className="form">
                <form>
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <button type="submit">Login</button>
                </form>
                <button>Register</button>
                <button>Demo</button>
            </div>
        )
    }
}

export default LoginForm;