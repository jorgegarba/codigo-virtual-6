import React, { useState } from 'react'
import logo from "./../assets/logo.png"

const Header = () => {

  const [auth, setAuth] = useState(false);

  return (
    <header className="header">
      <figure className="header__logo">
        <img src={logo} alt="" />
      </figure>
      <div className="header__auth">

        {
          auth ?
            <>
              <span>Jorge Garnica</span>
              <button onClick={() => {
                setAuth(false);
              }}>Cerrar Sesión</button>
            </> :
            <button onClick={() => {
              setAuth(true);
            }}>Iniciar Sesión</button>
        }

      </div>
    </header>
  )
}

export default Header
