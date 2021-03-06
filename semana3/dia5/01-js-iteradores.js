/**
 * Algoritmo que calcule el promedio de N notas
 */
// let sumatoria = 0;
// let n = 6;

// for (let i = 0; i < n; i++) {
//   let nota = +prompt(`Ingrese la nota número ${i}`);
//   sumatoria = sumatoria + nota;
// }
// console.log(`Promedio = ${sumatoria / n}`);



/**
 * Algoritmo que imprime la tabla de multiplicar del 5
 */
for (let i = 0; i < 10; i++) {
  console.log(`${i} x 5 = ${i * 5}`);
}

/**
 * Generando 5 números aleatorio entre 50 y 100 
 * */
for (let j = 0; j < 5; j++) {
  console.log((Math.random() * (100 - 50) + 50));
}

/**
 * Algoritmo que muestra de forma descendente
 * los números pares desde el 45 hasta el 0
 */
for (let i = 45; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}