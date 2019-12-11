import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './Routes/LoginPage/LoginPage';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import MainList from './Components/Main/Renderer/MainList';
import BrewGuide from './Components/BrewGuide/Renderer/BrewGuide';
import NewBrew from './Components/NewBrew/Renderer/NewBrew';
import Tutorials from './Components/Tutorials/Renderer/Tutorials';
import './App.css'


function App() {
  return (
    <div className="App">
      <Route path="/login" component={ LoginPage } />
      <Route path="/register" component={ RegistrationPage } />
      <Route path="/dashboard" component={ MainList } />
      <Route path="/brew-guide/:recipe_id" component={ BrewGuide } />
      <Route path="/add-brew" component={ NewBrew }/>
      <Route exact path="/" component={ Tutorials } />
    </div>
    
  );
}

export default App;
