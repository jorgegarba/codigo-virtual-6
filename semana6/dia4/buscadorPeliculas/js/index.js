import { getPeliculaByName } from "./servicios.js";

const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const resultados = document.getElementById("resultados");


formBusqueda.onsubmit = e => {
  e.preventDefault();
  let busqueda = inputBusqueda.value.trim();

  // version 1
  busqueda !== "" && buscarPelicula(busqueda);

  // version 3
  // busqueda !== "" ? buscarPelicula(busqueda) : null;

  // version 2
  // if (busqueda !== "") {
  //   buscarPelicula(busqueda)
  // }
}

const buscarPelicula = busqueda => {
  getPeliculaByName(busqueda).then(peliculas => {
    dibujarPeliculas(peliculas);
  })
}

const dibujarPeliculas = (peliculas) => {
  resultados.innerHTML = "";
  peliculas.forEach((objPelicula) => {
    const col = document.createElement("div");
    col.classList.add("col-md-3");
    col.innerHTML = `<div class="card">
                        <img src="${objPelicula.poster_path ? 'https://image.tmdb.org/t/p/w500' + objPelicula.poster_path : 'http://placehold.it/200'}" class="card-img-top">
                        <div class="card-body">
                          <h4 class="card-title">${objPelicula.original_title}</h4>
                          <p class="card-text">
                            ${objPelicula.overview}
                            <a href="#">leer mas...</a>
                          </p>
                          <ul class="movie__features">
                            <li>
                              <small class="text-muted">
                                <i class="fas fa-calendar"></i> ${objPelicula.release_date}
                              </small>
                            </li>
                            <li>
                              <small class="text-muted">
                                <i class="fas fa-star text-warning"></i> ${objPelicula.vote_average}
                              </small>
                            </li>
                            <li>
                              <small class="text-muted">
                                <i class="fas fa-heart text-danger"></i> ${objPelicula.vote_count}
                              </small>
                            </li>
                            <li>
                              <small class="text-muted">
                                +18
                                <i class="fas fa-check text-success"></i>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>`;
    resultados.appendChild(col);
  })
}

