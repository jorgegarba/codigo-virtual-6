import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import AdminRouter from './modulos/admin/AdminRouter';
import ClienteRouter from './modulos/cliente/ClienteRouter';

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
      </Switch>
    </Router>
  )
}

export default App
