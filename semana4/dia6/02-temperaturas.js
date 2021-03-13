/**
 * Llenar la tabla con los valores correspondientes por cada
 * muestra de temperatura del arreglo de temperaturas
 */
/**
 * Ejemplo con manejo de fechas
 */
let fechaString = "2021-03-13 18:00:00";
// creando un objeto fecha
let fecha = new Date(fechaString);
console.log(fecha);

// obteniendo el año de una fecha
console.log(fecha.getFullYear());

// obteniendo la hora , minutos

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());