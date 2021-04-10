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

const App = () => {

  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (objProducto) => {

    //1. hacer una copia del carrito
    let carritoTemporal = [...carrito];
    //2. Buscar en la copia del carrito si un producto ya existe
    let posicion = carritoTemporal.findIndex((objProductoCarrito) => objProductoCarrito.id === objProducto.id);

    if (posicion >= 0) {
      carritoTemporal[posicion].cantidad++;
      setCarrito(carritoTemporal);
    } else {
      // agregamos al carrito un nuevo producto ya que no existía en el carrito
      carritoTemporal.push({
        ...objProducto,
        cantidad: 1
      });
      setCarrito(carritoTemporal);
    }

  }

  const eliminarProducto = id => {
    let carritoTemporal = [...carrito];
    let posicion = carritoTemporal.findIndex((objProducto) => objProducto.id === id)
    carritoTemporal.splice(posicion, 1);
    setCarrito(carritoTemporal);
  }


  return (
    <Router>
      <header >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" activeClassName="active" exact={true}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/productos" className="nav-link " activeClassName="active">Productos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/carrito" className="nav-link " activeClassName="active">Carrito ({carrito.length})</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/productos/:productoId">
          <ProductoDetailPage />
        </Route>
        <Route path="/productos">
          <ProductosPage agregarAlCarrito={agregarAlCarrito} />
        </Route>
        <Route path="/carrito">
          <CarritoPage carrito={carrito} eliminarProducto={eliminarProducto} />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
