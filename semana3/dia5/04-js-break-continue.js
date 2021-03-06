/**
 * break;
 * Finaliza de manera total un ciclo for
 * sin importar que a éste, le quedaran iteraciones por dar
 */

let castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
let busqueda = "hola";

for (const palabra of castellano) {
  if (busqueda === palabra) {
    console.log("lo encontré");
    break;
  }
}

/**
 * continue;
 * Finaliza la iteración actual de un ciclo for, pasando
 * de inmediato, a la siguiente iteración
 */

/**
 * Entre los números del 1 al 6,
 * imprimir la tabla de multiplcar de los números impares
 */

for (const numero of [1, 2, 3, 4, 5, 6]) {
  if (numero % 2 === 0) {
    continue;
  }
  console.log(`TABLA DE MULTIPLICAR DEL ${numero}`);
  for (const multiplicador of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
  }
}

// INVESTIGAR LOS ITERADORES 
// WHILE y DO-WHILE en JAVASCRIPT