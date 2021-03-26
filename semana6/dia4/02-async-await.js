/**
 * Utilizando una función async
 */
const apiPeliculas = "https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1";
const apiGeneros = "https://api.themoviedb.org/3/genre/movie/list?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES";

const traerDatos = async () => {
  const peticion1 = await fetch(apiPeliculas);
  const peliculas = await peticion1.json();
  const peticion2 = await fetch(apiGeneros);
  const generos = await peticion2.json();

  return {
    peliculas: peliculas,
    generos: generos
  }
}

traerDatos().then(rptFinal => {
  console.log(rptFinal);
})