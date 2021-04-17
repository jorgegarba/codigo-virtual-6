import React, { useEffect, useState } from 'react'
import { postVerificar } from '../servicios/authService';
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
      postVerificar(localStorage.getItem("token")).then(rpta => {
        if (rpta.data.ok) {
          iniciarSesionContext(localStorage.getItem("token"));
        } else {
          console.log("inicio de sesión fallido");
          localStorage.removeItem("token");
          setState({
            autenticado: false,
            usu_nom: null,
            token: null,
            cargando: false
          });
        }
      }).catch(error => {
        console.log(error);
        console.log("INICIO FALLIDOOOOOO");
        localStorage.removeItem("token");
        setState({
          autenticado: false,
          usu_nom: null,
          token: null,
          cargando: false
        });
      })
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
