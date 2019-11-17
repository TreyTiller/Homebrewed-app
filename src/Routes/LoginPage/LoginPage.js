import React, { Component } from 'react'
import LoginForm from '../../Components/Login/Login-Form/Login-Form'
import { Section } from '../../Components/Utils/Utils'
import Header from '../../Components/Header/Header'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <Header />
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
