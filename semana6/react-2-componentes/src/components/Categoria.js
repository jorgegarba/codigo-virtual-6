import React from 'react'

const Categoria = (props) => {
  return (
    <li
      className="list-group-item"> {props.nombre}
      <span className="badge bg-primary">{props.id}</span>
    </li>
  )
}

export default Categoria
