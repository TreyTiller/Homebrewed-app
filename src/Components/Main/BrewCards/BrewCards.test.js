import React from 'react';
import ReactDOM from 'react-dom';
import BrewCards from './BrewCards'

describe(`BrewCards component`, () => {
  it('renders the dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrewCards />, div);

    ReactDOM.unmountComponentAtNode(div)
  })
})