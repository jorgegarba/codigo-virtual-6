/**
 * Algoritmo que ingresa 3 nuevos elementos a un arreglo
 * usando la función PUSH
 */
// let palabrasCastellano = ["hola", "bien", "adios", "mañana"];
// for (let i = 0; i < 3; i++) {
//   let palabra = prompt("Ingrese nueva palabra al dicionario");
//   /**
//    * arreglo.push(elemento) inyecta un nuevo elemento en el
//    * arreglo en la última posición que corresponda
//    */
//   palabrasCastellano.push(palabra);
// }
// console.log(palabrasCastellano);

/**
 * Planteamiento:
 * El cliente, ingresa una opción (1 o 2):
 * 1: El cliente desea traducir una palabra del inglés al castellano
 * 1.1: el cliente ingresa una palabra en inglés, y el programa 
 *      da la traducción en castellano
 * 2: El cliente desea traducir una palabra del castellano al inglés
 * 2.1: el cliente ingresa una palabra en castellano, y el programa 
 *      da la traducción en inglés
 */
let castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
let ingles = ["hello", "good", "bye", "tomorrow", "eat", "sing"];
let opcion = prompt("Ingrese opcion 1 o 2");
let traduccion = "";

if (opcion === "1") {
  let traducir = prompt("Ingrese la palabra en ingles")
  for (let i = 0; i < ingles.length; i++) {
    if (ingles[i] === traducir) {
      traduccion = castellano[i]
    }
  }
}
else if (opcion === "2") {
  let traducir = prompt("Ingrese la palabra en español")
  for (let i = 0; i < castellano.length; i++) {
    if (castellano[i] === traducir) {
      traduccion = ingles[i]
    }
  }
}

console.log(traduccion === "" ? "No hay una traducción" : `La traducción es: ${traduccion}`);

/**
 * Usando la estructura forof
 * Ejemplo: recorrer el arreglo de palabras en castellano
 */
for (const elemento of castellano) {
  console.log(elemento);
}