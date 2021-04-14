import React, { useState } from 'react'

const Formularios1 = () => {

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    distrito: "3",
    mensaje: ""
  });

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }


  return (
    <main className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form>
                <div>
                  <label htmlFor="" className="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Apellido:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    value={formulario.apellido}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">Distrito</label>
                  <select
                    name="distrito"
                    value={formulario.distrito}
                    className="form-control"
                    onChange={handleChange}>
                    <option value="1">Cayma</option>
                    <option value="2">Miraflores</option>
                    <option value="3">Cerro Colorado</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="form-label">Mensaje:</label>
                  <textarea
                    className="form-control"
                    name="mensaje"
                    onChange={handleChange}
                    value={formulario.mensaje} ></textarea>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <pre>
                {
                  JSON.stringify(formulario)
                }
              </pre>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Formularios1
