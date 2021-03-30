import React from 'react'
import { listaPeliculas } from "./../data/data-peliculas"
import "./../estilos/peliculas.css"
const Peliculas = () => {


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
    <div className="col-md-9">
      <div className="row">
        {
          listaPeliculas.map(objPelicula => {
            return (
              <div className="col-md-3 mb-3" key={objPelicula.id}>
                <div className="card sombra">
                  <img src={"https://image.tmdb.org/t/p/w500" + objPelicula.poster_path} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">{objPelicula.original_title}</h4>
                    <p className="card-text">
                      {objPelicula.overview.substr(0, 100) + "..."}
                    </p>
                    {
                      mayorDeEdad(objPelicula.adult)
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Peliculas
