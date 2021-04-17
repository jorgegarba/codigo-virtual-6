import React from 'react'

const PosHeader = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/imagenes/logo.svg" alt="" />
      </div>
      <div className="header__buscador">
        <img src="/imagenes/search.svg" alt="" />
        <input type="text" className="header__input" placeholder="Busca un término" />
      </div>
      <div className="header__usuario">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
        <span>Jorge Garnica</span>
      </div>
    </header>
  )
}

export default PosHeader
