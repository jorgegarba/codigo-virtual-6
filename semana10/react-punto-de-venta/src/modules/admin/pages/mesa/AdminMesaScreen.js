import React, { useEffect, useState } from 'react'
import { getMesas } from '../../../../services/mesaService';
import { MDBDataTableV5 } from "mdbreact";
import AdminModalEditarMesa from '../../components/AdminModalEditarMesa';
import AdminModalCrearMesa from '../../components/AdminModalCrearMesa';

const AdminMesaScreen = () => {

  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [mostrarModalCrear, setMostrarModalCrear] = useState(false);
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
  const [objMesaEditar, setObjMesaEditar] = useState(null);

  const traerMesas = () => {

    setCargando(true);

    getMesas().then(rpta => {
      if (rpta.data.ok) {
        let mesasFormateadas = rpta.data.content.map((objMesa, i) => {
          return {
            ...objMesa,
            mesa_cap: objMesa.mesa_cap + " personas",
            posicion: i + 1,
            acciones:
              <>
                <button className="btn btn-warning" onClick={() => {
                  setObjMesaEditar({ ...objMesa });
                  setMostrarModalEditar(true);
                }}>Editar</button>
                <button className="btn btn-danger">
                  Eliminar
                </button>
              </>
          }
        })
        setMesas({
          ...mesas,
          rows: mesasFormateadas
        })
        setCargando(false);

      }
    })
  }

  useEffect(() => {
    traerMesas();
  }, [])


  return (
    <>
      <main className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                <button className="btn btn-primary" onClick={() => {
                  setMostrarModalCrear(true);
                }}>Crear Mesa</button>
                <hr />
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
        setMostrarModalEditar={setMostrarModalEditar}
        objMesaEditar={objMesaEditar}
        traerMesas={traerMesas}
      />
      <AdminModalCrearMesa
        mostrarModalCrear={mostrarModalCrear}
        setMostrarModalCrear={setMostrarModalCrear}
        traerMesas={traerMesas} />


    </>
  )
}

export default AdminMesaScreen
