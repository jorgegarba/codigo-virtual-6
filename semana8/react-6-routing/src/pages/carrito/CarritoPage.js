import React from 'react'

const CarritoPage = ({ carrito }) => {
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
                <th>Stock</th>
                <th>Precio</th>
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
                      <td>{objProducto.stock}</td>
                      <td>S/ {objProducto.precio}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-4"></div>
      </div>
    </main>
  )
}

export default CarritoPage
