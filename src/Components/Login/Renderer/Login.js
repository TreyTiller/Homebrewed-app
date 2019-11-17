import React from 'react';
import Header from '../../Header/Header';
import LoginForm from '../Login-Form/Login-Form';
import TutButton from '../Tut-Button/Tut-Button';


function Login() {
  return (
    <div className="login-renderer">
      <Header />
      <LoginForm />
      <TutButton />
    </div>
  );
}

export default Login;
