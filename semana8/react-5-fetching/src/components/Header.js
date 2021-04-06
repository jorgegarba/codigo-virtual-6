import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand">NoticiasAPP</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  )
}

export default Header
