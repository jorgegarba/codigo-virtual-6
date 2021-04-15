import React, { useContext } from 'react'
import CarritoContext from '../context/carritoContext'
import { NavLink } from "react-router-dom";

const Header = () => {

  const { carrito } = useContext(CarritoContext);

  return (
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
  )
}

export default Header
