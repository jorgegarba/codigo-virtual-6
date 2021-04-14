import React from 'react'
import { Link } from "react-router-dom"
const Error404Page = () => {
  return (
    <main className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Ups! {"=("}</h1>
          <p className="col-md-8 fs-4">Esta página ha sido expropiada 😎✏</p>
          <Link className="btn btn-primary" to="/">
            Ir a la página principal
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error404Page
