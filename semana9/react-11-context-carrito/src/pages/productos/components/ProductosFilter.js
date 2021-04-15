import React, { useRef } from 'react'

const ProductosFilter = ({ setTag }) => {

  const refInputBusqueda = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if (refInputBusqueda.current.value.trim() !== "") {
      setTag(refInputBusqueda.current.value.trim());
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        Filtrador de Productos
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={refInputBusqueda}
              type="text"
              className="form-control"
              placeholder="Busca un producto" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductosFilter
