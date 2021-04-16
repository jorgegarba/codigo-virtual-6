import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './context/authContext';

const PrivateRoute = (props) => {

  const { autenticado } = useContext(AuthContext);

  return (
    autenticado ?

      <Route path={props.path}>
        {props.children}
      </Route> :

      <Redirect to="/" />
  )
}

export default PrivateRoute
