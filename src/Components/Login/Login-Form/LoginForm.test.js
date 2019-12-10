import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Login-Form'

describe(`LoginForm component`, () => {
  it('renders the complete form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm />, div);

    ReactDOM.unmountComponentAtNode(div)
  })
})