import React from 'react'
import { Route, Switch } from "react-router-dom"
import AuthLoginPage from './pages/AuthLoginPage'
const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/auth/login">
          <AuthLoginPage />
        </Route>
      </Switch>
    </>
  )
}

export default AuthRouter
