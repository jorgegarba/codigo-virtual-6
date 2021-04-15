import React from 'react'
import Productos from './components/Productos'
import ProductosState from './context/productosState'

const App = () => {


  return (
    <ProductosState>
      <Productos />
    </ProductosState>
  )
}

export default App

