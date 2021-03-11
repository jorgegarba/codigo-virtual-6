/**
 * Funciones y propiedades de los STRING
 */

let frase = "Los programadores crean lo que las personas sueñan.";
console.log(frase);
// Tamaño de un string
console.log(`Tamaño: ${frase.length}`);

// Retorno de la frase en mayúsculas
console.log(frase.toUpperCase());

// Retorno de la frase en minúsculas
console.log(frase.toLowerCase());

// Obtener un arreglo de strings dado un separador
console.log(frase.split(" "));

// Obtener la posición en la que aparece un determinado caracter
// o una determinada cadena
console.log(frase.indexOf("prog"));
// buscando algo que no exista
console.log(frase.indexOf("mate"));

// obtener la cadena sin los espacios en blanco de LOS EXTREMOS DE LA CADENA
// OJO: NO ESTAMOS HABLANDO DE LOS ESPACIOS INTERNOS!!!!!!!!!!!!, SOLO DE LOS EXTERNOSSSSS

let correo = "   jorgegarba@gmail.com";
console.log(correo);
console.log(correo.trim());

// Obtener la subcaneda desde la posisión 5, dos caracteres adelante
console.log(frase.substr(5, 2));

// Obtener la subcadena desde la posición 5 hasta la posición 6(no incluye la 7)
console.log(frase.substring(5, 7));