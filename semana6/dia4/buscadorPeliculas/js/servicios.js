
const endpointBusqueda = "https://api.themoviedb.org/3/search/movie?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1&include_adult=false";

export const getPeliculaByName = async (busqueda) => {
  let rpta = await axios.get(endpointBusqueda + `&query=${busqueda}`);
  return rpta.data.results;
}