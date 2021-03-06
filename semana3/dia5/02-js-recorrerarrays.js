
/**
 * Algoritmo que cuenta la cantidad de personas mayores de edad
 * en el arreglo
 */
let edades = [15, 30, 45, 12, 62, 85, 41, 10, 11];
console.log(edades.length);
let contador = 0;
for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 17) {
    contador++;
  }
}
console.log(`Cantidad de personas menores de edad: ${contador}`);

console.log(`La primera edad registrada: ${edades[0]}`);
console.log(`La última edad registrada: ${edades[edades.length - 1]}`);


/**
 * Del arreglo de las edades, crear un nuevo arreglo
 * que contega el doble de las edades del primer arreglo
 * [30,60,90,24..........,22]
 */
let dobles = [];
for (let i = 0; i < edades.length; i++) {
  if (typeof edades[i] === "number") {
    dobles[i] = edades[i] * 2;
  }
}

console.log(dobles);