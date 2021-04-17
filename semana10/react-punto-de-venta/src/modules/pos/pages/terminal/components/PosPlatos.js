import React from 'react'
import PosPlato from './PosPlato'

const PosPlatos = () => {
  return (
    <div className="carta">
      <h3>Lista de Platos Categoria: &nbsp; <span className="color-secundario">BEBIDAS</span></h3>

      <div className="carta__platos">
        <PosPlato />
        <PosPlato />
        <PosPlato />
        <PosPlato />
      </div>
    </div>
  )
}

export default PosPlatos
