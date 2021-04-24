import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/invoice.css"
import "./styles/login.css"

import PosRouter from './modules/pos/PosRouter';
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import AuthState from './context/authState';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route path="/pos">
            <PosRouter />
          </Route>
          <Route path="/admin">
            <AdminRouter />
          </Route>
          <Route path="/auth">
            <AuthRouter />
          </Route>
        </Switch>
      </Router>
    </AuthState>
  )
}

export default App
