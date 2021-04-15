import React, { useState } from 'react'

import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

import CarritoPage from './pages/carrito/CarritoPage';
import HomePage from './pages/home/HomePage';
import ProductoDetailPage from './pages/productos/ProductoDetailPage';
import ProductosPage from './pages/productos/ProductosPage';

import "react-notifications/lib/notifications.css";
import CarritoState from './context/carritoState';
import Header from './components/Header';

const App = () => {


  return (
    <CarritoState>
      <Router>

        <Header />
        <Switch>
          <Route path="/productos/:productoId">
            <ProductoDetailPage />
          </Route>
          <Route path="/productos">
            <ProductosPage />
          </Route>
          <Route path="/carrito">
            <CarritoPage />
          </Route>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </CarritoState>
  )
}

export default App
