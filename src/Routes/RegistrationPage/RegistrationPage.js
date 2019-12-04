import React, { Component } from 'react';
import { Section } from '../../Components/Utils/Utils';
import RegistrationForm from '../../Components/Registration/Registration-form';
import HeaderLocked from '../../Components/Header/Header-Locked';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <HeaderLocked />
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
