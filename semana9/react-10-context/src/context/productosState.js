import React, { useState } from 'react'
import ProductosContext from './productosContext'

const ProductosState = (props) => {

  const [listaProductos, setListaProductos] = useState(["producto1", "producto2"]);

  const generarProducto = () => {
    setListaProductos([...listaProductos, `producto nuevo`])
  }

  return (
    <ProductosContext.Provider value={{
      listaProductos: listaProductos,
      generarProducto: generarProducto
    }}>
      {props.children}
    </ProductosContext.Provider>
  )
}

export default ProductosState
