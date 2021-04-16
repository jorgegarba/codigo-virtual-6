import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import AdminRouter from './modulos/admin/AdminRouter';
import AuthRouter from './modulos/auth/AuthRouter';
import ClienteRouter from './modulos/cliente/ClienteRouter';
import Error404Page from './modulos/invitado/pages/Error404Page';
import HomePage from './modulos/invitado/pages/HomePage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/admin">
          <AdminRouter />
        </PrivateRoute>
        <Route path="/auth">
          <AuthRouter />
        </Route>
        <Route path="/cliente">
          <ClienteRouter />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route component={Error404Page} />
      </Switch>
    </Router>
  )
}

export default App
