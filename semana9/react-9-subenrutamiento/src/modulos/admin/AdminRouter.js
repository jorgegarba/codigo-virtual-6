import React from 'react'
import { Switch, Route } from "react-router-dom"
import AdminHeader from './components/AdminHeader'
import AdminClientesPage from './pages/clientes/AdminClientesPage'
import AdminProductosPage from './pages/productos/AdminProductosPage'
/*PARA EL ENRUTAMIENTO INTERNO O ANIDADO
YA NO SE NECESITA USAR EL BROWSERROUTER NUEVAMENTE, sólo el switch */

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/productos">
          <AdminProductosPage />
        </Route>
        <Route path="/admin/clientes">
          <AdminClientesPage />
        </Route>
      </Switch>
    </>
  )
}

export default AdminRouter
