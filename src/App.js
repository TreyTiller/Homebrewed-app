import React from 'react';
import Login from './Components/Login/Renderer/Login';
import Register from './Components/Registration/Renderer/Register';
import MainList from './Components/Main/Renderer/MainList'

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <MainList />
    </div>
  );
}

export default App;
