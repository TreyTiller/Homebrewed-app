import React, { Component } from 'react';
import TokenService from '../../../services/token-service';
import AuthApiService from '../../../services/auth-api-service';
import { Button, Input } from '../../Utils/Utils';
import { Link, BrowserRouter } from 'react-router-dom';
import './Login-Form.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name' className="login_label">
            User name
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'
            placeholder="User Name">
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password' className="login_label">
            Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'
            placeholder="Password">
          </Input>
        </div>
        <BrowserRouter>
        <div className="buttons">
          <Button type='submit'>
            Login
        </Button>
        
          <Link to="/register">
            <Button>
              Register
        </Button>
          </Link>
          <Link to="/">
            <Button>
              Tutorial
        </Button>
          </Link>
        </div>
        </BrowserRouter>
      </form>
    )
  }
}
