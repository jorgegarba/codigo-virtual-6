import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import AdminRouter from './modulos/admin/AdminRouter';
import ClienteRouter from './modulos/cliente/ClienteRouter';
import Error404Page from './modulos/invitado/pages/Error404Page';
import HomePage from './modulos/invitado/pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminRouter />
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
