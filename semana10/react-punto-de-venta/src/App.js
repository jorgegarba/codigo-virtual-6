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
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <AuthState>
        <Switch>
          <PrivateRoute path="/pos">
            <PosRouter />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminRouter />
          </PrivateRoute>
          <Route path="/auth">
            <AuthRouter />
          </Route>
        </Switch>
      </AuthState>
    </Router>
  )
}

export default App
