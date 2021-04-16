import React from 'react'
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin"
                  activeClassName="active" exact>Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/productos"
                  activeClassName="active" exact>Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/clientes"
                  activeClassName="active" exact>Clientes</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </header>
  )
}

export default AdminHeader
