import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = (props) => {

  const autenticado = true;

  return (
    autenticado ?
      
      <Route path={props.path}>
        {props.children}
      </Route> :

      <Redirect to="/" />
  )
}

export default PrivateRoute
