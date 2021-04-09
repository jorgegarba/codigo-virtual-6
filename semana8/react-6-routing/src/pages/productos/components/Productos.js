import React from 'react'
import Producto from './Producto'

const Productos = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <Producto />
      </div>
      <div className="col-md-3">
        <Producto />
      </div>
    </div>
  )
}

export default Productos
