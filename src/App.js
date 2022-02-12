import React from 'react';
import { Router } from '@reach/router';
import NavBar from './Components/NavBar';
import LoginComponant from './Components/LoginComponant';
import DashboardComponant from './Components/DashboardComponant';
import './App.css';
import Home from './Components/Home';
import HomeNum from './Components/HomeNum';
import Hello from './Components/Hello';
import ColorMe from './Components/ColorMe';

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Router>
        <LoginComponant path= "/login" />
        <DashboardComponant path= "/dashboard" />
        <Home path= "/home" />
        <HomeNum path= "/:num" />
        <Hello path= "/:hello" />
        <ColorMe path= "/:word/:txtcolor/:bgcolor" />
      </Router>
    </div>
  );
}

export default App;
