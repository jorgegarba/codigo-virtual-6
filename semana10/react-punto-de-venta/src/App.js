import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles/index.css"
import PosRouter from './modules/pos/PosRouter';

const App = () => {
  return (

    <Router>
      <Switch>
        <Route path="/pos">
          <PosRouter />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
