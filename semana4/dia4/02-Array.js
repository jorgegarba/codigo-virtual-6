// Api de la clase Array

let edades = [15, 12, 20, 40, 65, 10, 5, 22];
// arreglo.forEach((elemento,index)=>{})
/**
 * 1. la función forEach itera TODOS los elementos y no retorna ningún dato
 * 2. No podemos detener un forEach
 */
edades.forEach((x, i) => {
  if (x === 40) {
    return
  }
  console.log(x + " " + i);
});

// arreglo.map((elemento, index)=>{})
/**
 * 1. La función map itera TODOS los elementos
 * 2. Retorna un ****nuevo arreglo*** con la posibilidad de transformar
 * a cada elemento del arreglo.
 * 3. Retorna necesariamente el 100% de los elementos
 */
console.log("******* probando función map *******");
let nuevasEdades = edades.map((el, i) => {
  // supongamos que queremos obtener en un nuevo arreglo
  // a las edades pares con el doble de su valor y los impares
  // con el mismo valor
  if (el % 2 === 0) {
    return `Edad ${i} = ${el * 2}`;
  }
  return `Edad ${i} = ${el}`;
});
console.log(nuevasEdades);

console.log("******* probando función filter *******");
/**
 * arreglo.filter((elemento,i)=>{})
 * Filtra los elementos en cada iteración y retorna un nuevo 
 * arreglo con los elementos que únicamente han sido filtrados
 * OJO: el filtro debe ser una condicional
 * OJO: si ningún elemento pasa el filtro, de todos modos se retorna
 * un arreglo vacío
 * OJO: a cada elemento retornado, no se le puede modificar el valor
 * sólo retorna el elemento como tal
 */
let mayoresDeEdad = edades.filter((el, i) => {
  if (el >= 17) {
    return el;
  }
});
console.log(mayoresDeEdad);

/**
 * arreglo.find((elemento,i)=>{})
 * Itera los elementos de un arreglo hasta que la condición interna
 * se cumpla, cuando esto sucede, se retorna el elemento que haya
 * cumplido con la condición
 * OJO: se retorna el primer elemento que cumpla con la condición(UNO SOLO)
 * FIND a diferencia de FILTER debe ser usado para encontrar un elemento ÚNICO
 * 
 * Cuando el elemento no es encotnrado, se retorna un undefined
 * Si el elemento es encontrado, no puede ser modificado cuando es retornado
 * se retorna el elemento tal cual.
 */

let el65 = edades.find((el, i) => {
  if (el === 65) {
    return el
  }
});
console.log(el65);


/**
 * array.reduce((acumulador, el)=>{})
 */

let sumaTotal = edades.reduce((sumatoria, el, i) => {
  return sumatoria + el;
}, 0);

console.log(sumaTotal);