import React, { useState } from 'react'
import AuthContext from './authContext'

const AuthState = (props) => {

  const [state, setState] = useState({
    autenticado: false,
    usu_nom: null,
    token: null
  });

  const iniciarSesionContext = (token) => {
    /////?????
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      iniciarSesionContext: iniciarSesionContext
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
