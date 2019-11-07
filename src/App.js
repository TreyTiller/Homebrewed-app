import React from 'react';
import Login from './Components/Login/Renderer/Login';
import Register from './Components/Registration/Renderer/Register';
import MainList from './Components/Main/Renderer/MainList';
import BrewGuide from './Components/BrewGuide/Renderer/BrewGuide';
import NewBrew from './Components/NewBrew/Renderer/NewBrew';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <MainList />
      <BrewGuide />
      <NewBrew />
    </div>
  );
}

export default App;
