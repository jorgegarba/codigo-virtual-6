import React, { useEffect, useState } from "react";
import { deleteProductoById, getProductos } from "../../servicios/servicios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductosListPage = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const traerProductos = () => {
    setCargando(true);
    getProductos().then((rpta) => {
      setProductos(rpta.data);
      setCargando(false);
    });
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar?",
      icon: "warning",
      text: "Los cambios serán irreversibles! 😲",
      showCancelButton: true
    }).then((feedback) => {
      if (feedback.isConfirmed) {
        // sí, borrar el producto
        deleteProductoById(id).then((rpta) => {
          if (rpta.status === 200) {
            // se eliminó correctamente
            traerProductos();
          }
        });
      }
    });
  };

  return (
    <main className="container">
      <div className="row mt-4">
        <div className="col">
          <Link to="/productos/crear" className="btn btn-primary">
            Crear Producto
          </Link>
          {cargando ? (
            <div className="alert alert-info">
              <h4>Cargando</h4>
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Imagen</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((objProducto, i) => {
                  return (
                    <tr key={objProducto.id}>
                      <td>{i + 1}</td>
                      <td>{objProducto.id}</td>
                      <td>{objProducto.nombre}</td>
                      <td>{objProducto.descripcion}</td>
                      <td>
                        <img src={objProducto.imagen} alt="" width="100" />
                      </td>
                      <td>{objProducto.precio}</td>
                      <td>{objProducto.stock}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            eliminarProducto(objProducto.id);
                          }}
                        >
                          Eliminar
                        </button>
                        <Link
                          to={`/productos/editar/${objProducto.id}`}
                          className="btn btn-warning"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductosListPage;
