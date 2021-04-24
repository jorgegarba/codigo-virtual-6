import React, { useReducer } from 'react'
import AuthContext from './authContext'
import { authReducer } from './authReducer'

const initialState = {
  autenticado: false,
  cargando: true,
  token: null,
  usu_nom: null,
  usu_id: null
}


const AuthState = (props) => {

  const [state, setState] = useReducer(authReducer, initialState);


  const iniciarSesionContext = (token) => {

    localStorage.setItem("token", token);
    let payloadString = token.split(".")[1];
    let payloadStringDecript = atob(payloadString);
    let payloadJson = JSON.parse(payloadStringDecript);
    setState(
      {
        action: "INICIAR_SESION",
        data: {
          autenticado: true,
          cargando: false,
          token: token,
          usu_nom: payloadJson.usu_nom,
          usu_id: payloadJson.usu_id
        }
      }
    )

  }
  const cerrarSesion = () => {
    setState({
      action: "CERRAR_SESION"
    })
  }


  return (
    <AuthContext.Provider value={{
      iniciarSesionContext
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
