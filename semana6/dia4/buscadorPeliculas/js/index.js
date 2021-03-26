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
                        <img src="http://placehold.it/200" alt="" class="card-img-top">
                        <div class="card-body">
                          <h4 class="card-title">Scarface</h4>
                          <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex quas perspiciatis illum,
                            et placeat <a href="#">leer mas...</a>
                          </p>
                          <ul class="movie__features">
                            <li>
                              <small class="text-muted">
                                <i class="fas fa-calendar"></i> 10-10-2021
                              </small>
                            </li>
                            <li>
                              <small class="text-muted">
                                <i class="fas fa-star text-warning"></i> 4.5
                              </small>
                            </li>
                            <li>
                              <small class="text-muted">
                                <i class="fas fa-heart text-danger"></i> 205
                              </small>
                            </li>
                            <li>
                              <small class="text-muted">
                                +18
                                <i class="fas fa-ban text-danger"></i>
                                <i class="fas fa-check text-success"></i>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>`;
    resultados.appendChild(col);
  })
}