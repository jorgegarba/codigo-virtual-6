import React, { useState } from 'react'
import PosContext from './posContext'

const PosState = (props) => {

  const [objMesaGlobal, setObjMesaGlobal] = useState(null);
  const [objCategoriaGlobal, setObjCategoriaGlobal] = useState(null);
  const [pedidos, setPedidos] = useState([]);



  const modificarPlatoContext = (objPlato, accion) => {
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
      // Si hemos encontrado un objPedido, no implica que el plato que queremos agregar
      // esté previamente en el arreglo de platos de dicho pedido
      // Recorriendo el arreglo de platos para ver si encontramos un plato igual
      // al que queremos agregar
      let posPlatoEncontrado = objPedido.platos.findIndex((objPlatoPedido) => objPlatoPedido.plato_id === objPlato.plato_id);

      // si existía un plato igual al que queremos agregar?
      if (posPlatoEncontrado >= 0) {

        if (accion === "sumar") {
          // significa que el plato sí existía en una posición del arerglo de platos del objPedido
          // agregar una unidad del nuevo plato al pedido
          objPedido.platos[posPlatoEncontrado].plato_cant++;
          setPedidos(pedidosActuales);
        } else {
          // En caso de querer restar un plato, hay que verificar que debemos tener 
          // más de una unidad de ese plato o en caso contrario, borrar el plato del arreglo de platos
          if (objPedido.platos[posPlatoEncontrado].plato_cant > 1) {
            objPedido.platos[posPlatoEncontrado].plato_cant--;
            setPedidos(pedidosActuales);
          } else {
            // en caso habría una unidad del plato encontrado, borrar dicho plato del arreglo
            objPedido.platos.splice(posPlatoEncontrado, 1);

            // // Como quiera que acabamos de borrar un plato del pedido actual, es posible
            // // que dicho plato sea el último o único de ese pedido, conclusión, debemos de 
            // // borrar ese objPedido
            if (objPedido.platos.length === 0) {
              pedidosActuales = pedidosActuales.filter((pedido) => pedido.mesa_id !== objMesaGlobal.mesa_id);

            }


            setPedidos(pedidosActuales);
          }


        }

      } else {

        if (accion === "sumar") {
          // es el primer plato en un pedido que ya existia en la mesa global seleccionada
          objPedido.platos.push({
            ...objPlato,
            plato_cant: 1
          });
          //OJO: objPedido, representa a uno de los elementos del arreglo "pedidosActuales"
          // Nosotros acabamos de modificar el "objPedido" agregándole un nuevo plato a su arreglo de
          // "platos".
          // Cuando "objPedido" es modificado, éste guarda la dirección de memoria del "objPedido" al que
          // representa dentro del arreglo "pedidosActuales",
          // Conclusión:
          //Cuando modificamos "objPedido", internamente se modifica el "objPedido" del arreglo 
          // "pedidosActuales", por eso, volvemos a actualizar el arreglo "pedidosActuales"
          setPedidos(pedidosActuales);
        } else {
          // en caso de no encontrar un plato a "restar" en el pedido, no se hace nada.
        }


      }


    } else {
      if (accion === "sumar") {
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



  }



  return (
    <PosContext.Provider value={{
      objMesaGlobal,
      objCategoriaGlobal,
      pedidos,
      setObjMesaGlobal,
      setObjCategoriaGlobal,
      modificarPlatoContext
    }}>
      {props.children}
    </PosContext.Provider>
  )
}

export default PosState
