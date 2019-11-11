import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login/Renderer/Login';
import Register from './Components/Registration/Renderer/Register';
import MainList from './Components/Main/Renderer/MainList';
import BrewGuide from './Components/BrewGuide/Renderer/BrewGuide';
import NewBrew from './Components/NewBrew/Renderer/NewBrew';
import Tutorials from './Components/Tutorials/Renderer/Tutorials';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/dashboard" component={ MainList } />
      <Route path="/brew-guide" component={ BrewGuide } />
      <Route path="/add-brew" component={ NewBrew }/>
      <Route exact path="/" component={ Tutorials } />
    </div>
  );
}

export default App;
