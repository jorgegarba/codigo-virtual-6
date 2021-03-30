import React from 'react'

const Pelicula = (props) => {

  console.log(props);

  const mayorDeEdad = (mayor) => {
    if (mayor) {
      return (
        <>
          <span className="text-danger">Sólo para +18</span>
          <button className="btn btn-danger btn-small">Soy mayor de 18 🙄</button>
        </>
      )
    } else {
      return (
        <>
          <span className="text-success">Apta para todos</span>
          <button className="btn btn-success btn-small">Ver Pelicula</button>
        </>
      )
    }
  }


  return (

    <div className="col-md-3 mb-3">
      <div className="card sombra">
        <img src={"https://image.tmdb.org/t/p/w500" + props.peli.poster_path} alt="" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{props.peli.original_title}</h4>
          <p className="card-text">
            {props.indice} - {props.peli.overview.substr(0, 100) + "..."}
          </p>
          {
            mayorDeEdad(props.peli.adult)
          }
        </div>
      </div>
    </div>
  )
}

export default Pelicula
