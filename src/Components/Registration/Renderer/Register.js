import React from 'react';
import HeaderLocked from '../../Header/Header-Locked';
import RegistrationForm from '../Registration-form';




function Register() {
  return (
    <div className="register-renderer">
      <HeaderLocked />
      <RegistrationForm />
    </div>
  );
}

export default Register;
