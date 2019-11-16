import React, { Component } from 'react'
import { Section } from '../../Components/Utils/Utils'
import RegistrationForm from '../../Components/Registration/Registration-form'
import Header from '../../Components/Registration/Header'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <Header />
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
