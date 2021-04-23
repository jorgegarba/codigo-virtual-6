import React, { useEffect, useState } from 'react'
import { getMesas } from '../../../../services/mesaService';
import { MDBDataTableV5 } from "mdbreact";
import AdminModalEditarMesa from '../../components/AdminModalEditarMesa';

const AdminMesaScreen = () => {

  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [mesas, setMesas] = useState({
    columns: [
      { label: '#', field: 'posicion', },
      { label: 'Id', field: 'mesa_id', },
      { label: 'Nro Mesa', field: 'mesa_nro', },
      { label: 'Capacidad', field: 'mesa_cap', },
      { label: 'Acciones', field: 'acciones' }
    ],
    rows: [],
  });

  useEffect(() => {
    getMesas().then(rpta => {
      if (rpta.data.ok) {
        let mesasFormateadas = rpta.data.content.map((objMesa, i) => {
          return {
            ...objMesa,
            mesa_cap: objMesa.mesa_cap + " personas",
            posicion: i + 1,
            acciones: <button onClick={() => {
              setMostrarModalEditar(true);
            }}>Editar</button>
          }
        })
        setMesas({
          ...mesas,
          rows: mesasFormateadas
        })
        setCargando(false);

      }
    })
  }, [])


  return (
    <>
      <main className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                {
                  cargando ?
                    <div className="alert alert-info">
                      Cargando
                  </div> :
                    <MDBDataTableV5 data={mesas} />
                }
              </div>
            </div>
          </div>
        </div>
      </main>
      <AdminModalEditarMesa
        mostrarModalEditar={mostrarModalEditar}
        setMostrarModalEditar={setMostrarModalEditar} />
    </>
  )
}

export default AdminMesaScreen
