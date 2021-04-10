import React from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import CarritoPage from './pages/carrito/CarritoPage';
import HomePage from './pages/home/HomePage';
import ProductoDetailPage from './pages/productos/ProductoDetailPage';
import ProductosPage from './pages/productos/ProductosPage';

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/productos/:productoId" component={ProductoDetailPage}/>
        <Route path="/productos" component={ProductosPage} />
        <Route path="/carrito" component={CarritoPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
