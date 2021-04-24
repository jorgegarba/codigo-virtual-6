import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom"
import AdminHeader from './components/AdminHeader'
import AdminMesaScreen from './pages/mesa/AdminMesaScreen'
import AdminPlatoScreen from './pages/plato/AdminPlatoScreen'

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/mesa">
          <AdminMesaScreen />
        </Route>
        <Route path="/admin/plato">
          <AdminPlatoScreen />
        </Route>
      </Switch>
    </>
  )
}

export default AdminRouter
