import React from 'react'
import PosBoletaItem from './PosBoletaItem'

const PosBoleta = () => {
  return (
    <div className="boleta">
      <h3>Pedido Mesa: &nbsp;<span className="color-secundario">01</span></h3>
      <hr />
      <div className="comanda">
        <h4 className="comanda__mesa">Mesa 01</h4>
        <p className="comanda__usuario">Carlos Jimenez</p>
        <hr />

        <ul className="comanda__lista">
          <PosBoletaItem />
          <PosBoletaItem />
          <PosBoletaItem />
          <PosBoletaItem />
          <PosBoletaItem />
        </ul>
        <button className="boton boton-success boton-block">PAGAR</button>
      </div>
    </div>
  )
}

export default PosBoleta
