import React, { useState } from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import CarritoPage from './pages/carrito/CarritoPage';
import HomePage from './pages/home/HomePage';
import ProductoDetailPage from './pages/productos/ProductoDetailPage';
import ProductosPage from './pages/productos/ProductosPage';

const App = () => {

  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (objProducto, cantidad = 1) => {
    let carritoAntiguo = [...carrito];
    carritoAntiguo.push(objProducto);
    setCarrito(carritoAntiguo);
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
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/carrito" className="nav-link">Carrito ({carrito.length})</Link>
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
          <CarritoPage carrito={carrito} />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
