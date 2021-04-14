import React, { useState } from "react";
import { postProducto } from "../../servicios/servicios";
import { useHistory } from "react-router-dom";

const ProductosCrearPage = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    imagen: ""
  });
  const [error, setError] = useState(false);

  const history = useHistory();

  let { nombre, descripcion, precio, stock, imagen } = formulario;

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      precio === 0 ||
      imagen.trim() === ""
    ) {
      setError(true);
      return;
    }

    postProducto(formulario).then((rpta) => {
      if (rpta.status === 201) {
        history.push("/productos");
      }
    });
  };

  return (
    <main className="container">
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              {error ? (
                <div className="alert alert-danger">
                  Todos los campos deben ser llenados y el precio, debe ser
                  mayor a 0 (cero)
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="" className="form-label">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ejm: Play Station"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0.00"
                    name="precio"
                    value={precio}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Imagen
                  </label>
                  <textarea
                    name="imagen"
                    value={imagen}
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    className="form-control"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="" className="form-label">
                    Stock Inicial
                  </label>
                  <input
                    name="stock"
                    value={stock}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <button className="btn btn-primary"> Crear Producto</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductosCrearPage;
