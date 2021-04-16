import React, { useState } from 'react'

const AuthLoginPage = () => {

  const [formulario, setFormulario] = useState({
    correo: "",
    password: ""
  })
  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }
  return (
    <main className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <form>
                <div>
                  <label htmlFor="" className="form-label">Email</label>
                  <input type="text"
                    className="form-control"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    placeholder="correo..." />
                </div>
                <div>
                  <label htmlFor="" className="form-label">Password</label>
                  <input type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={formulario.password}
                    placeholder="pasword..." />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLoginPage
