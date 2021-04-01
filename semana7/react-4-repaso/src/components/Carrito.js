import React from 'react'

const Carrito = ({carrito}) => {
  return (
    <div>
      <h3>Carrito de compras</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((prod, i) => (
            <tr key={i}>
              <td>{prod.nombre}</td>
              <td>{prod.descripcion}</td>
              <td>{prod.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Carrito
