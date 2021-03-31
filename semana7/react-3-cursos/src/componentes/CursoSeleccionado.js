import React from 'react'

const CursoSeleccionado = (props) => {
  return (
    <section className="seleccionado">
      {
        props.cursoSelected ?
          <>
            <h3>Curso Seleccionado</h3>
            <figure className="seleccionado__img">
              <img src={'./imagenes/' + props.cursoSelected.imagen} alt="" />
            </figure>
            <h4 className="seleccionado__title">{props.cursoSelected.nombre}</h4>
            <p className="seleccionado__desc">
              {
                props.cursoSelected.descripcion
              }
            </p>
            <p className="seleccionado__disponible">
              {
                props.cursoSelected.disponible ?
                  <span className="disponible">Disponible</span> :
                  <span className="no-disponible"> No disponible</span>
              }
            </p>
            <p className="seleccionado__horas">
              <span>
                <i className="fas fa-clock"></i> {props.cursoSelected.duracion} horas
              </span>
            </p>
            <p className="seleccionado__precio">
              <span>
                <i className="fas fa-money-check "></i> {props.cursoSelected.precio} dólares
          </span>
            </p>
          </> :
          <p>No hay curso seleccionado</p>
      }

    </section>
  )
}

export default CursoSeleccionado
