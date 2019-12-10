import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register'

describe(`Register component`, () => {
  it('renders the complete form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register />, div);

    ReactDOM.unmountComponentAtNode(div)
  })
})