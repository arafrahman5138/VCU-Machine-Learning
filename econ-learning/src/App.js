import './App.css';
import Home from './pages/Home.js';
import Modules from './pages/Modules.js';
import Profile from './pages/Profile.js';
import Quiz from './components/Quiz1.js';
import Login from './pages/Login';
import Help from './pages/Help';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>

      <div className="navigation">
        <h2>CODEVA</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      
      <Switch>

      <Route path="/help">
          <Help/>
      </Route>
      <Route path="/quiz">
          <Quiz/> 
      </Route>

        <Route path="/modules">
          <Modules/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
      
      </Router>


      <div className="footer">
        footer area
      </div>

    </div>
  )
}


export default App;
