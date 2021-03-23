import React, { useState } from "react";
import './App.css';
import Home from './pages/Home.js';
import Welcome from './pages/Welcome.js';
import Modules from './pages/Modules.js';
import Login from './pages/Login';
import Register from './pages/Register';
import Help from './pages/Help';
import Quiz1 from './components/quizzes/Quiz1'
import Quiz2 from './components/quizzes/Quiz2'
import Quiz3 from './components/quizzes/Quiz3'
import Quiz4 from './components/quizzes/Quiz4'
import Quiz5 from './components/quizzes/Quiz5'
import Quiz6 from './components/quizzes/Quiz6'
import Quiz7 from './components/quizzes/Quiz7'
import Quiz8 from './components/quizzes/Quiz8'

import { render } from 'react-dom';
import { IndexRoute, hashHistory } from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export const CredentialsContext = React.createContext();

function App() {
  const credentialsState = useState(null);

  return (
    <div className="app">
     <CredentialsContext.Provider value={credentialsState}>
      <Router>

      <div className="navigation">
        <h2>CODEVA</h2>
        <div className="links">
          <Link to="/">Welcome</Link>
          <Link to="/modules">Modules</Link>
        </div>
      </div>
      
      <Switch>


      <Route path="/quiz1">
          <Quiz1/>
      </Route>
      <Route path="/quiz2">
          <Quiz2/>
      </Route>
      <Route path="/quiz3">
          <Quiz3/>
      </Route>
      <Route path="/quiz4">
          <Quiz4/>
      </Route>
      <Route path="/quiz5">
          <Quiz5/>
      </Route>
      <Route path="/quiz6">
          <Quiz6/>
      </Route>
      <Route path="/quiz7">
          <Quiz7/>
      </Route>
      <Route path="/quiz8">
          <Quiz8/>
      </Route>
      
      <Route path="/help">
          <Help/>
      </Route>

        <Route path="/modules">
          <Modules/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/Register">
          <Register/>
        </Route>

        <Route exact path="/">
          <Welcome/>
        </Route>

      </Switch>
      
      </Router>
      </CredentialsContext.Provider>
      <div className="footer">
        footer area
      </div>
    
    </div>
  )
}


export default App;
