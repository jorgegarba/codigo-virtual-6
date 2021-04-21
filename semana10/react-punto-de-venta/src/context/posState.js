import React, { useState } from 'react'
import PosContext from './posContext'

const PosState = (props) => {

  const [objMesaGlobal, setObjMesaGlobal] = useState(null);
  const [objCategoriaGlobal, setObjCategoriaGlobal] = useState(null);
  const [pedidos, setPedidos] = useState([]);



  const agregarPlatoContext = (objPlato) => {
    // obntener una copia del estado de pedidos
    let pedidosActuales = [...pedidos]
    //1. Verificar si tenemos una mesa global seleccionada para agregar el plato
    // en caso contrario no hacer nada.
    if (!objMesaGlobal) { return; }
    // 2. Preguntamos si el arreglo de pedidos, ya tiene un pedido pendiente
    // en la mesa global seleccionada
    let objPedido = pedidosActuales.find((objPedido) => objMesaGlobal.mesa_id === objPedido.mesa_id);
    if (objPedido) {
      //  Ya había un pedido para la mesa global seleccionada
    } else {
      // No había ningún pedido para la mesa global selecciona (es un nuevo pedido)
      pedidosActuales.push({
        usu_id: 0,
        mesa_id: objMesaGlobal.mesa_id,
        pedido_est: "pendiente",
        platos: [
          {
            ...objPlato,
            plato_cant: 1
          }
        ]
      });
      setPedidos(pedidosActuales);
    }



  }



  return (
    <PosContext.Provider value={{
      objMesaGlobal,
      objCategoriaGlobal,
      setObjMesaGlobal,
      setObjCategoriaGlobal,
      agregarPlatoContext
    }}>
      {props.children}
    </PosContext.Provider>
  )
}

export default PosState
