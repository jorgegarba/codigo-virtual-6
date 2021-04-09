import React from 'react'

const ProductosFilter = () => {
  return (
    <div className="card">
      <div className="card-header">
        Filtrador de Productos
      </div>
      <div className="card-body">
        <form>
          <div>
            <input type="text"
              className="form-control"
              placeholder="Busca un producto" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductosFilter
