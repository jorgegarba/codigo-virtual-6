import React from 'react'

const CardProducto = ({prod, agregarACarrito}) => {

  const manejarCarrito = () => {
    agregarACarrito(prod)
  }

  return (
    <div className="col-12 col-lg-6 col-xl-4">
      <div className="card mb-3">
        <img 
          src={prod.imagen} 
          alt={prod.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">
            {prod.nombre}
          </h4>
          <p>{prod.descripcion}</p>
          <p className="font-weight-bold">
            S/{prod.precio}
          </p>
        </div>
        <div className="card-footer">
          <button 
            className="btn btn-primary btn-block"
            onClick={manejarCarrito}
            >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProducto
