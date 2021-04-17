import React from 'react'
import PosCategoria from './PosCategoria'

const PosCategorias = () => {
  return (
    <nav className="menu">
      <ul className="menu__lista">
        <PosCategoria />
        <PosCategoria />
        <PosCategoria />
        <PosCategoria />
      </ul>
    </nav>
  )
}

export default PosCategorias
