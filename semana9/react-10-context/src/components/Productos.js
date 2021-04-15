import React, { useContext } from 'react'
import ProductosContext from '../context/productosContext';

const Productos = () => {

  const { listaProductos, generarProducto } = useContext(ProductosContext);
  

  return (
    <div>
      <button onClick={() => {
        generarProducto();
      }}>
        Generar Producto
      </button>
      <ul>
        {listaProductos.map((producto) => {
          return <li>{producto}</li>
        })}
      </ul>
    </div>
  )
}

export default Productos
