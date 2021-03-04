/**
 * Pagina 44: Ejercicio 2.6
 */
/**
 * DATO: Anteponer el signo "+" antes de un string(en forma de 
 * número), convierte a éste número en un entero o decimal(tipo number)
 */
let catetoA = +prompt("Ingrese el primer cateto");
let catetoB = +prompt("Ingrese el segundo cateto");

let hipotenusa;
hipotenusa = (catetoA ** 2 + catetoB ** 2) ** 0.5;
console.log(`La hipotenusa es: ${hipotenusa}`);
