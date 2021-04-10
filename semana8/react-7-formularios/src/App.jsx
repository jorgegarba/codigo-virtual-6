import React from 'react'
import {
  Link,
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Formularios1 from './pages/formularios1/Formularios1';

const App = () => {
  return (
    <Router>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/formularios1">Formularios 1</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/formularios2">Features</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/formularios3">Pricing</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <Switch>
        <Route path="/formularios1">
          <Formularios1 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
