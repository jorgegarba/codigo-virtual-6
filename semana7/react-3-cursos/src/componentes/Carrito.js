import React from 'react'

const Carrito = (props) => {


  return (
    <section className="carrito">
      <h3>Carrito</h3>
      <ul className="carrito__lista">
        {
          props.carrito.map((objCurso) => {
            return (
              <li key={objCurso.id}>
                <h5>{objCurso.nombre}</h5>
                <p><strong>Precio:</strong><span>$ {objCurso.precio}</span></p>
              </li>
            )
          })
        }
      </ul>
      <p>
        Total: $. {
          props.carrito.reduce((anterior, objCurso) => {
            return anterior + objCurso.precio
          }, 0)}
      </p>
    </section>
  )
}

export default Carrito
