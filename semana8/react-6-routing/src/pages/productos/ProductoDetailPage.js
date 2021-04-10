import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getProductoById } from '../../services/productosService';

const ProductoDetailPage = (props) => {

  let params = useParams();
  let productoId = params.productoId;
  const [objProducto, setObjProducto] = useState(null);

  useEffect(() => {
    getProductoById(productoId).then(rpta => {
      setObjProducto(rpta.data);
      console.log(rpta.data);
    })
  }, [])


  return (
    <div>
      PAGINA DE DETALLE DE UN PRODUCTO
    </div>
  )
}

export default ProductoDetailPage
