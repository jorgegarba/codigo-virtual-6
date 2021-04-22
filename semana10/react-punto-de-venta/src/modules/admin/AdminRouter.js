import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom"
import AdminHeader from './components/AdminHeader'
import AdminMesaScreen from './pages/mesa/AdminMesaScreen'

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/mesa">
          <AdminMesaScreen />
        </Route>
      </Switch>
    </>
  )
}

export default AdminRouter
