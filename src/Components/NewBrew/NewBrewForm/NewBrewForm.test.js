import React from 'react';
import ReactDOM from 'react-dom';
import AddBrewForm from './NewBrewForm'

describe(`NewBrewForm component`, () => {
  it('renders the complete form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddBrewForm />, div);

    ReactDOM.unmountComponentAtNode(div)
  })
})