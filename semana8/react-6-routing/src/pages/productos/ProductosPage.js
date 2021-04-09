import React, { useEffect, useState } from 'react'
import Productos from './components/Productos'
import ProductosFilter from './components/ProductosFilter'
import { getProductos } from "./../../services/productosService";

const ProductosPage = () => {

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos().then(rpta => {
      setProductos(rpta.data);
    })
  }, []);

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <ProductosFilter />
        </div>
        <div className="col-md-8">
          <Productos productos={productos} />
        </div>
      </div>
    </main>
  )
}

export default ProductosPage
