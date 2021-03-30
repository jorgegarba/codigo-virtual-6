import React from 'react'
import { listaPeliculas } from "./../data/data-peliculas"
import Pelicula from "./Pelicula";
import "./../estilos/peliculas.css"
const Peliculas = () => {


  return (
    <div className="col-md-9">
      <div className="row">
        {
          listaPeliculas.map((objPelicula, i) => {
            return <Pelicula peli={objPelicula} indice={i} key={objPelicula.id} />
          })
        }
      </div>
    </div>
  )
}

export default Peliculas
