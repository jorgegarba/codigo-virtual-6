import React, { useState, useContext } from 'react'
import AuthContext from '../../../context/authContext';
import { postLogin } from '../../../servicios/authService';
import { useHistory } from "react-router-dom";

const AuthLoginPage = () => {
  const [formulario, setFormulario] = useState({
    correo: "",
    password: ""
  })
  const history = useHistory();
  const { iniciarSesionContext } = useContext(AuthContext);

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    postLogin(formulario).then(rpta => {
      if (rpta.data.ok) {
        iniciarSesionContext(rpta.data.token);
        history.push("/admin/dashboard")
      }
    })
  }
  return (
    <main className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                <div>
                  <button type="submit">Iniciar Sesión</button>
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
