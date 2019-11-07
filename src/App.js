import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login/Renderer/Login';
import Register from './Components/Registration/Renderer/Register';
import MainList from './Components/Main/Renderer/MainList';
import BrewGuide from './Components/BrewGuide/Renderer/BrewGuide';
import NewBrew from './Components/NewBrew/Renderer/NewBrew';
import RoastInfo from './Components/RoastInformation/Renderer/RoastInfo';
import RoastExpiration from './Components/RoastExpirationForm/Renderer/RoastExpirationForm';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/dashboard" component={ MainList } />
      <Route path="/brew-guide" component={ BrewGuide } />
      <Route path="/add-brew" component={ NewBrew }/>
      <Route path="/roast-info" component={ RoastInfo }/>
      <Route path="/roast-form" component={ RoastExpiration } />
    </div>
  );
}

export default App;
