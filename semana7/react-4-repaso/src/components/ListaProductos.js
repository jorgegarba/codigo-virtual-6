import React from 'react'
import CardProducto from './CardProducto'

const ListaProductos = ({numero, productos}) => {
  
  return (
    <div>
      <h1>Mis Productos</h1>
      <div className="row">
        {productos.map((prod, indice) => (
          <CardProducto prod={prod} key={indice}/>
        ))}
      </div>
    </div>
  )
}

export default ListaProductos
