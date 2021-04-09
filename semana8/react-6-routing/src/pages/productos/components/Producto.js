import React from 'react'

const Producto = ({ objProducto }) => {
  return (
    <div className="card">
      <img src={objProducto.imagen} alt=""
        height="150"
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{objProducto.nombre}</h5>
        <p className="card-text">{objProducto.descripcion}</p>
        <p className="d-flex justify-content-between">
          <small>
            Precio: S/. {objProducto.precio}
          </small>
          <small>
            Stock: {objProducto.stock} unidades
          </small>
        </p>
      </div>
    </div>
  )
}

export default Producto
