/**
 * Trabajamos con la clase date(manejando fechas)
 */

let fechaHoy = new Date();
console.log(fechaHoy);

// Mostrar el año de una fecha
console.log(fechaHoy.getFullYear());

// Mostrar el mes de una fecha
// ojo ENERO = 0 y DICIEMBRE = 11
console.log(fechaHoy.getMonth());

// Mostrar el dia de una fecha
console.log(fechaHoy.getDate());

let diaDeLaMadre2021 = new Date(2021, 4, 9);

// Cuando restamos fecha, el resultado se muestra en
// milisegundos, la unidad mínima de medida de tiempo en JS

let millisegundos = diaDeLaMadre2021 - fechaHoy
let segundos = millisegundos / 1000;
let minutos = segundos / 60;
let horas = minutos / 60;
let dias = horas / 24;

