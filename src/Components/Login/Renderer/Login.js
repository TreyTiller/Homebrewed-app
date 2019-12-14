import React from 'react';
import LoginForm from '../Login-Form/Login-Form';
import HeaderLocked from '../../Header/Header-Locked';


function Login() {
  return (
    <div className="login-renderer">
      <HeaderLocked />
      <LoginForm />
    </div>
  );
}

export default Login;
