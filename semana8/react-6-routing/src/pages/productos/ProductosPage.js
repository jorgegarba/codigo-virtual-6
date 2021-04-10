import React, { useEffect, useState } from 'react'
import Productos from './components/Productos'
import ProductosFilter from './components/ProductosFilter'
import { getProductos, getProductosByTag } from "./../../services/productosService";

const ProductosPage = ({ agregarAlCarrito }) => {

  const [productos, setProductos] = useState([]);
  const [tag, setTag] = useState("");

  const traerProductos = () => {
    getProductos().then(rpta => {
      setProductos(rpta.data);
    })
  }

  useEffect(() => {
    traerProductos();
  }, []);

  useEffect(() => {
    if (tag !== "") {
      getProductosByTag(tag).then(rpta => {
        setProductos(rpta.data);
      })
    }
  }, [tag]);

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <ProductosFilter setTag={setTag} />
        </div>
        <div className="col-md-8">
          {
            tag.length > 0 &&
            <span className="badge bg-primary mb-3" onClick={() => {
              traerProductos();
              setTag("");
            }}>
              {tag} &times;
            </span>
          }

          <Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </main>
  )
}

export default ProductosPage
