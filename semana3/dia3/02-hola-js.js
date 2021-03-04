// Un comentario solo en esta linea
/**
 * Un comentario de muchas
 * lineas
 */
console.log("Buenas buenas js");
/**
 * Variables
 * 1. Las variables sólo se crean 1 vez
 * 2. Las variables no pueden iniciar con un número
 * 3. Las variables no llevan espacios
 * 4. Las variables no deben incluir caracteres 
 *    especiales (tildes, comas, ñ, etc)
 */
// Tipo de dato = STRING = textos
let nombre = "Jorge Luis"
let apellido = 'Garnica Blanco'
let direccion = `Calle siempre viva`

// Concatenar textos (Unir dos textos)
console.log("Nombre:  " + nombre)
console.log(apellido)
console.log(`Mi dirección es ${direccion}`)

// Tipo de dato = NUMBER = numeros(enteros y con decimales)
let edad = 29;
let sueldo = 950.10;
let sueldoConDescuento = sueldo - (sueldo * 8 / 100);
console.log(`Mi sueldo con descuento es: ${sueldoConDescuento}`);

// Tipo de dato = BOOLEANO = 2 posibles valores (true | false)
let transaccion = false;
let cazado = true;
// Modificando el valor de una variable
transaccion = true;
cazado = "si";
console.log(`¿Cazado? : ${cazado}`);
console.log(`¿Transacción exitosa? : ${transaccion}`);

// Tipo de dato = ARRAY = arreglo = colección de elementos
let notas = [5, 2, 10, 8];
console.log(`Las notas son: ${notas}`);
console.log(`La primera nota es: ${notas[0]}`);

/**
 * Todas las operaciones matemáticas son iguales que en excel por ejemplo
 * + , - , * , /
 *
 * % (módulo) => ésta operación, devuelve el 
 *               residuo de una división entera de 2 números
 */
let residuo1 = 50 % 2;
let residuo2 = 51 % 2;
console.log(`Residuo o módulo de 50/2 = ${residuo1}`);
console.log(`Residuo o módulo de 51/2 = ${residuo2}`);

/**
 * Operaciones simplificadas
 */
let likes = 0
likes++
console.log(`Me gusta: ${likes}`)
likes = likes + 1
console.log(`Me gusta: ${likes}`)
likes += 1
console.log(`Me gusta: ${likes}`)