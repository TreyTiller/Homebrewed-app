import React from 'react';
import HeaderLocked from '../../Header/Header-Locked';
import LoginForm from '../Login-Form/Login-Form';
import TutButton from '../Tut-Button/Tut-Button';
import HeaderLocked from '../../Header/Header-Locked';


function Login() {
  return (
    <div className="login-renderer">
      <HeaderLocked />
      <LoginForm />
      <TutButton />
    </div>
  );
}

export default Login;
