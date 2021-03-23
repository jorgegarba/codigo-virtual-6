/**
 * Destructuración de objetos
 */

let objPersona = {
  nombre: "Jorge",
  apellido: "Garnica",
  edad: 29,
  direccion: "Calle siempreviva 321"
};

// crear una variable llamada "descripcion" a partir de la copia
// del campo "direccion" del objPersona
let { direccion } = objPersona;
console.log(direccion);

let { nombre, apellido } = objPersona;
console.log(nombre, apellido);

// Usando el operador rest(...), obtenemos una copia en una NUEVA VARIABLE
// de TODOOOO el objPersona
let { ...copiaPersona } = objPersona;
copiaPersona.nombre = "Luis"
console.log(copiaPersona);
console.log(objPersona);


// Destrucutrar algunos atributos con nuevos nombres

let { nombre: firstName, edad: age } = objPersona;
console.log(firstName);
console.log(age);