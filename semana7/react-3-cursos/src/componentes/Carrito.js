import React from 'react'

const Carrito = (props) => {
  return (
    <section class="carrito">
      <h3>Carrito</h3>
      <ul class="carrito__lista">
        {
          props.carrito.map((objCurso) => {
            return (
              <li>
                <h5>{objCurso.nombre}</h5>
                <p><strong>Precio:</strong><span>$ {objCurso.precio}</span></p>
              </li>
            )
          })
        }

      </ul>
    </section>
  )
}

export default Carrito
