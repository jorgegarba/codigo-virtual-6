import React from 'react'
import { NotificationContainer, NotificationManager } from "react-notifications"
const CarritoPage = ({ carrito, eliminarProducto }) => {

  let total = carrito.reduce((sumatoria, objProducto) => {
    return sumatoria + (objProducto.precio * objProducto.cantidad)
  }, 0);

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Cant.</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                carrito.map((objProducto, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{objProducto.id}</td>
                      <td>{objProducto.nombre}</td>
                      <td>{objProducto.descripcion}</td>
                      <td><img src={objProducto.imagen} alt="" width="60" /></td>
                      <td>{objProducto.cantidad}</td>
                      <td>S/ {objProducto.precio}</td>
                      <td>
                        <button className="btn btn-danger btn-sm"
                          onClick={() => {
                            NotificationManager.success("Eliminado!");
                            eliminarProducto(objProducto.id);
                          }}>
                          Eliminar&times;
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              <tr style={{ fontSize: "19px" }}>
                <td>Total</td>
                <td colSpan="7" className="text-end">S/ {total.toFixed(2)}</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="col-md-4"></div>
      </div>
      <NotificationContainer />
    </main>
  )
}

export default CarritoPage
