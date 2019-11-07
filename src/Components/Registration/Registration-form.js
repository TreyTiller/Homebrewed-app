import React from 'react';

class RegistrationForm extends React.Component {
    render() {
        return (
            <div className="form">
                <p>When you create an account, HomeBrewed becomes customizable to you. You can update and keep track of your current bean's expiration date, be reminded of when it's time to buy more beans, and create new personal brewing methods that fit your specific coffee taste!</p>
                <form>
                    <input placeholder="name" />
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <button type="submit">Create Account</button>
                </form>
                <hr></hr>
            </div>
        )
    }
}

export default RegistrationForm;