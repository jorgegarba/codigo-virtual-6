/**
 * Funcion que retorna un nuevo arreglo de peliculas
 * donde cada objPelicula tendrá un atributo adicional
 * llamado "genres" que será un arreglo que tenga la lisa de 
 * generos en string(los nombres)
 */
function agregarGeneros() {
  let peliculasModificadas = peliculas.map((objPeli) => {
    let names = objPeli.genre_ids.map((idGenero) => {
      let objGeneroEncontrado = generos.find((objGenero) => {
        if (objGenero.id === idGenero) {
          return objGenero
        }
      })
      return objGeneroEncontrado.name;
    })
    objPeli.genres = names;
    return objPeli;
  });
  console.log(peliculasModificadas);
}
// agregarGeneros();

/**
 * Función que imprime un objeto género cuyo id sea igual al parámetro recibido
 * @param {*} idGenero 
 */
function getGeneroById(idGenero) {
  let objGeneroEncontrado = generos.find((objGenero) => {
    if (objGenero.id === idGenero) {
      return objGenero
    }
  });
  console.log(objGeneroEncontrado);
}
// getGeneroById(16);


/**
 * Función que imprime la lista de géneros dado un arreglo de Id's (idsGeneros)
 * @param {*} idsGeneros 
 */
function getGenerosByIds(idsGeneros = []) {
  let objsGeneros = idsGeneros.map((idGenero) => {
    let objGeneroEncontrado = generos.find((objGenero) => {
      if (objGenero.id === idGenero) {
        return objGenero
      }
    });
    return objGeneroEncontrado;
  });
  console.log(objsGeneros);
}

getGenerosByIds([35, 99]);