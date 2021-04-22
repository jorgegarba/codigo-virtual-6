import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/invoice.css"
import PosRouter from './modules/pos/PosRouter';
import AdminRouter from './modules/admin/AdminRouter';

const App = () => {
  return (

    <Router>
      <Switch>
        <Route path="/pos">
          <PosRouter />
        </Route>
        <Route path="/admin">
          <AdminRouter />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
