/**
 * Ejercicio 1 compra de articulo
 */
// let costoPrenda = 5_000
// let nombrePrenda = "Cartera Gucci"
// let creditCardCash = 4_999

// if (creditCardCash >= costoPrenda) {
//   // creditCardCash = creditCardCash - costoPrenda
//   creditCardCash -= costoPrenda
//   console.log(`Saldo disponible = ${creditCardCash} Soles.`);
//   console.log("Gracias por su compra joven!");
// } else {
//   console.log("No tiene saldo disponible 😥");
//   console.log(`Le faltan: ${costoPrenda - creditCardCash} Soles para pagar el producto`);
// }
// console.log("Hasta pronto");

/**
 * Ejercicio 2
*/
/**
 * Si el producto tiene un costo mayor o igual a 500.00 y:
 *  - Es jueves: Se descuenta un 15%
 *  - Es domingo: Se descuenta un 10%
 *  - Cualquier otro día, no hay descuento joven
 * Sino, tampoco hay descuento
 */
// let dia = "miercoles";
// let precioProducto = 600;

// // debugger;
// if (precioProducto >= 500) {
//   if (dia === "jueves") {
//     console.log(`Total a pagar: ${precioProducto * 0.85}`);
//   } else if (dia === "domingo") {
//     console.log(`Total a pagar: ${precioProducto * 0.9}`);
//   } else {
//     console.log(`Total a pagar ${precioProducto}`);
//   }
// } else {
//   console.log(`Total a pagar: ${precioProducto}`);
// }

/**
 * Ejercicio 3 (Mejorando el ejercicio 2)
 */
// let dia = "miercoles";
// let precioProducto = 600;

// if (precioProducto >= 500 && dia === "jueves") {

//   console.log(`Total a pagar: ${precioProducto * 0.85}`);

// } else if (precioProducto >= 500 && dia === "domingo") {
//   console.log(`Total a pagar: ${precioProducto * 0.9}`);

// } else {

//   console.log(`Total a pagar: ${precioProducto}`);
// }

/**
 * Ejercicio 4
 * Descuento del 5% bajo 2 condiciones(al menos se debe cumplir una condición)
 * - El producto debe superar los 1000 soles
 * - El dia debe ser lunes
 */

let dia = "domingo";
let precio = 1_001;
if (dia === "lunes" || precio > 1000) {
  console.log(`Total a pagarsh: ${precio * 0.95}`);
}
/**
 * Comparadores aritméticos son:
 * > mayor que
 * < menor que
 * >= mayor o igual que
 * <= menor o igual que
 * === igual en valor y en tipo de dato que
 * == igual en valor que
 * !== diferente que
 */


/**
 * SCOPE DE UNA VARIABLE ó
 * AMBITO DE UNA VARIABLE
 */

/**
 * Ingresar cantidad de horas trabajadas
 * Ingresar precio por hora
 * Resultados:
 * Si la cantidad de horas es mayor o igual a 35, el exceso
 * se paga al doble del salario normal por hora
 */
const precioXHora = 50;
const horasTrabajadas = +prompt("ingrese horas trabajadas");
let pagoTotal = 0;
if (horasTrabajadas >= 35) {
  pagoTotal = 35 * precioXHora + ((horasTrabajadas - 35) * 2 * precioXHora);
} else {
  pagoTotal = horasTrabajadas * precioXHora;
}
console.log(`Pago total = ${pagoTotal}`);