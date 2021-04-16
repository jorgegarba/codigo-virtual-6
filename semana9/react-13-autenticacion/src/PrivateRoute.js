import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './context/authContext';

const PrivateRoute = (props) => {

  const { autenticado, cargando } = useContext(AuthContext);

  return (
    cargando ?
      <div>
        cargando joven...
      </div> :
      
      autenticado ?

        <Route path={props.path}>
          {props.children}
        </Route> :

        <Redirect to="/" />


  )
}

export default PrivateRoute
