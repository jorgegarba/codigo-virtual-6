/**
 * Función que recibe un id de pelicula e imprime
 * la lista de géneros(nombres de los géneros) que pertenecen
 * a ésta película.
 * @param {number} peliId 
 */
const mostrarGenerosByPeliId = (peliId) => {
  // 1. buscar entre todas las peliculas la película que tenga
  // el id solicitado.
  let peliEncontrada = {};
  for (const peli of peliculas) {
    if (peli.id === peliId) {
      peliEncontrada = peli;
    }
  }
  // 2. recorrer el arreglo de ids,
  // en cada iteración, recorrer el arreglo de géneros para
  // comparar si encontramos o no a ese id
  for (const generoId of peliEncontrada.genre_ids) {
    for (const gen of generos) {
      if (generoId === gen.id) {
        console.log(gen.name);
      }
    }
  }
}
mostrarGenerosByPeliId(464052);


/**
 * Dado el nombre de un género, imprimir todos los nombres de las peliculas
 * que tengan al menos, ese género en su lista de géneros
 * @param {*} nombreGenero 
 */
const mostrarPelisByGeneroName = (nombreGenero) => {

  let generoEncontrado = {};
  for (const objGenero of generos) {
    if (objGenero.name === nombreGenero) {
      generoEncontrado = objGenero;
    }
  }
  console.log(`Las peliculas del género ${generoEncontrado.name} son:`);

  for (const objPelicula of peliculas) {
    for (const generoId of objPelicula.genre_ids) {
      if (generoId === generoEncontrado.id) {
        console.log(objPelicula.original_title);
      }
    }
  }

}

mostrarPelisByGeneroName("Adventure");


/**
 * Función que imprime la lista de películas con un promedio de 
 * calificaciones entre 7 y 10 puntos
 */
const peliculasRecomendadas = () => {
  console.log("Las peliculas top top top top top son:");
  for (const objPeli of peliculas) {
    if (objPeli.vote_average >= 7 && objPeli.vote_average <= 10) {
      console.log(objPeli.original_title);
    }
  }
}
peliculasRecomendadas();