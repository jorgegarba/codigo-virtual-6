/**
 * Destructuracion de Arreglos
 */

let edades = [12, 15, 47, 20, 51, 32, 14];

let [a, b, ...resto] = edades;

console.log(a);
console.log(b);
console.log(resto);

let [...copiaEdades] = edades;
console.log(copiaEdades);

let nuevasEdades = [...edades];
console.log(nuevasEdades);

/**
 * Simulemos que la función getCoords, retorna
 * un arreglo de 2 posiciones, en la primera
 * se encuentra la latitud de la ciudad, y en la 
 * segunda se encuentra la longitud de la ciudad
 */
const getCoords = (ciudad) => {

  return [-16.51351, -70.24521, 150000];
}

const [lat, lon, habitantes] = getCoords("Pucallpa");
console.log(lat);
console.log(lon);
console.log(habitantes);



let notas = [[12, 15, 16], [12, 17, 20]];

let [[n1, n2, n3], alumno2] = notas;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(alumno2);