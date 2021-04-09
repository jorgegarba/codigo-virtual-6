import React from 'react'
import Producto from './Producto'

const Productos = ({ productos }) => {
  return (
    <div className="row">
      {
        productos.map((objProducto) => {
          return (
            <div className="col-md-3" key={objProducto.id}>
              <Producto objProducto={objProducto} />
            </div>)
        })
      }
    </div>
  )
}
export default Productos
