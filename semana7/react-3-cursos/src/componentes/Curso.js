import React from 'react'

const Curso = (props) => {

  return (
    <div className="curso">
      <figure className="curso__imagen">
        {
          props.objCurso.descuento > 0 ?
            <p className="curso__descuento">
              {props.objCurso.descuento}%
            </p> :
            null
        }

        <img src={"./imagenes/" + props.objCurso.imagen} alt="" />
      </figure>
      <div className="curso__info">
        <h4>{props.objCurso.nombre}</h4>
        <p className="curso__descripcion">
          {props.objCurso.descripcion}
        </p>
        <div className="curso__caracteristicas">
          <span>
            <i className="fas fa-clock"></i> {props.objCurso.duracion} horas
          </span>
          <span>
            <i className="fas fa-money-check "></i> {props.objCurso.precio} dólares
          </span>
          {
            props.objCurso.disponible ?
              <span className="disponible">disponible</span> :
              <span className="no-disponible">no disponible</span>
          }
        </div>
      </div>
    </div>
  )
}

export default Curso
