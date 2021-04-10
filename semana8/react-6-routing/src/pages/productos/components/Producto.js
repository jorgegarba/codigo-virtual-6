import React from 'react'
import { useHistory } from "react-router-dom";
import { NotificationContainer, NotificationManager } from "react-notifications";

const Producto = ({ objProducto, agregarAlCarrito }) => {
  const history = useHistory();
  return (
    <div className="card">
      <img src={objProducto.imagen} alt=""
        height="150"
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{objProducto.nombre}</h5>
        <p className="card-text">{objProducto.descripcion}</p>
        <p className="d-flex justify-content-between">
          <small>Precio: S/. {objProducto.precio}</small>
          <small>Stock: {objProducto.stock} unidades</small>
        </p>
        <p className="d-flex justify-content-between">
          <button className="btn btn-sm btn-primary"
            onClick={() => {
              history.push(`/productos/${objProducto.id}`)
            }}>Ver...</button>
          <button className="btn btn-sm btn-secondary"
            onClick={() => {

              NotificationManager.success("Agregado!", "Agregado Tititulo")

              agregarAlCarrito(objProducto);
            }}>
            Agregar (+1)
          </button>
        </p>
        <NotificationContainer />
      </div>
    </div>
  )
}

export default Producto
