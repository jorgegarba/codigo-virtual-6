import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProductoById } from '../../services/productosService';

const ProductoDetailPage = (props) => {
  console.log(props);
  let params = useParams();
  let productoId = params.productoId;
  const [objProducto, setObjProducto] = useState(null);

  useEffect(() => {
    getProductoById(productoId).then(rpta => {
      setObjProducto(rpta.data);
      console.log(rpta.data);
    })
  }, [productoId]);


  return (
    <main className="container">
      {
        objProducto ? <div className="row">
          <div className="col-md-6">
            <figure>
              <img src={objProducto.imagen}
                alt="" style={{
                  maxWidth: "100%",
                  borderRadius: "8px"
                }} />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{objProducto.nombre}</h4>
                <p className="card-text">{objProducto.descripcion}</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{objProducto.stock}</td>
                      <td>S/ {objProducto.precio}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> :
          null
      }

    </main>
  )
}

export default ProductoDetailPage
