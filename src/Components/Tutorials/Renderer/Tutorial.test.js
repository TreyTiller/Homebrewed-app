import React from 'react';
import ReactDOM from 'react-dom';
import Tutorials from './Tutorials'

describe(`Tutorials component`, () => {
  it('renders the complete tutorial without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tutorials />, div);

    ReactDOM.unmountComponentAtNode(div)
  })
})