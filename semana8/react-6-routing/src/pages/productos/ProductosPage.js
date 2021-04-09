import React from 'react'
import Productos from './components/Productos'
import ProductosFilter from './components/ProductosFilter'

const ProductosPage = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <ProductosFilter />
        </div>
        <div className="col-md-8">
          <Productos />
        </div>
      </div>
    </main>
  )
}

export default ProductosPage
