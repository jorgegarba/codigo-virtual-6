import React, { useEffect, useState } from 'react'
import AuthContext from './authContext'

const AuthState = (props) => {

  const [state, setState] = useState({
    autenticado: false,
    usu_nom: null,
    token: null,
    cargando: true
  });

  const iniciarSesionContext = (token) => {
    localStorage.setItem("token", token)
    const payloadString = token.split(".")[1];
    // atob(texto_encriptado_en_base_64)
    // retorna el texto desencriptado
    const payloadStringDecript = atob(payloadString);
    const payloadJson = JSON.parse(payloadStringDecript);
    setState({
      autenticado: true,
      usu_nom: payloadJson.usu_nom,
      token: token,
      cargando: false
    });

  }

  const iniciarSesionConLocalStorage = () => {
    if (localStorage.getItem("token")) {
      iniciarSesionContext(localStorage.getItem("token"));
    }
  }

  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, [])



  return (
    <AuthContext.Provider value={{
      autenticado: state.autenticado,
      usu_nom: state.useState,
      token: state.token,
      cargando: state.cargando,
      iniciarSesionContext: iniciarSesionContext,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
