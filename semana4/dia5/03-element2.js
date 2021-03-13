/**
 * Obtener y settear atributos a los elementos
 */


let div1 = document.querySelector("#div1");

let btnCirculo = document.querySelector("#btnCirculo");
let btnCuadrado = document.querySelector("#btnCuadrado");

let div2 = document.querySelector("#div2");
let interruptor = document.querySelector("#interruptor");

let tabla = document.querySelector("#tabla");
let btnBordeMenor = document.querySelector("#btnBordeMenor");
let btnBordeNeutro = document.querySelector("#btnBordeNeutro");
let btnBordeMayor = document.querySelector("#btnBordeMayor");

let btnMostrarClases = document.querySelector("#btnMostrarClases");

btnCirculo.onclick = function () {
  div1.classList.remove("cuadrado");
  div1.classList.add("circulo");
};

btnCuadrado.onclick = function () {
  div1.classList.remove("circulo");
  div1.classList.add("cuadrado");
}

interruptor.onclick = function () {
  div2.classList.toggle("circulo");
}

btnBordeNeutro.onclick = function () {
  /**
   * elemento.getAttribute("nombre_del_atributo")
   * Obtiene el valor del atributo especificado del elemento
   */
  /**
   * elemento.setAttribute("nombre_atributo","valor_atributo")
   */
  let borde = +tabla.getAttribute("border");
  if (borde === 0) {
    tabla.setAttribute("border", "1")
  } else {
    tabla.setAttribute("border", "0")
  }
}

btnBordeMayor.onclick = function () {
  let borde = +tabla.getAttribute("border");
  borde++;
  tabla.setAttribute("border", borde);
}

btnBordeMenor.onclick = function () {
  let borde = +tabla.getAttribute("border");
  if (borde === 0)
    return;
  borde--;
  tabla.setAttribute("border", borde);
}

btnMostrarClases.onclick = function () {
  // Mostrando las clases de un elemento
  console.log(div1.classList);
  // Averiguando si un elemento tiene una determinada clase
  if (div1.classList.contains("circulo")) {
    console.log("Sí tiene la clase 'circulo'");
  }
  // Otra forma de mostrar las clases:
  console.log(div1.getAttribute("class"));
}