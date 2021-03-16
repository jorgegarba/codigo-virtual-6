const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido");
const formulario = document.querySelector("#formulario");
const inputEmail = document.querySelector("#inputEmail");
const selectPais = document.querySelector("#selectPais");
const selectDepartamento = document.querySelector("#selectDepartamento");

let paises = [
  { id: 12343, nombre: "Perú", },
  { id: 12, nombre: "México", },
  { id: 13, nombre: "China", },
  { id: 19, nombre: "Argentina", },
]
let departamentos = [
  { id: 22, nombre: "Lima", idPais: 12343 },
  { id: 23, nombre: "Puno", idPais: 12343 },
  { id: 24, nombre: "Wujan", idPais: 13 },
  { id: 25, nombre: "Acapulco", idPais: 12 },
  { id: 26, nombre: "Fujian", idPais: 13 },
  { id: 27, nombre: "Buenos Aires", idPais: 19 },
  { id: 28, nombre: "Cordova", idPais: 19 },
  { id: 29, nombre: "Tulum", idPais: 12 },
]

// formulario.addEventListener("click", () => {

// })


// formulario.onclick = (e) => {
//   console.log("asdas");
//   console.log(e);
//   console.log(e.target);
// }

/**
 * oninput
 */

let datos = {
  nombre: "",
  apellido: "",
  email: ""
}


let myOninput = (e) => {
  datos[e.target.name] = e.target.value;
  console.log(datos);
}

inputNombre.oninput = myOninput;
inputApellido.oninput = myOninput;
inputEmail.oninput = myOninput;


/**
 * onsubmit evento que se desencadena cuando se 
 * envía el formulario
 */
formulario.onsubmit = (e) => {
  //  preventDefault() sirve para detener la ejecución normal de
  // un evento por defecto
  // Ejm: una etiqueta <a></a> nos redirecciona a una página con el evento CLICK
  // Ejm: una etiqueta <form></form> actualiza la página con el evento ONSUBMIT
  // Ejm: hacer click derecho en el viewport, abre un menú contextual en el evento CONTEXTMENU
  e.preventDefault();
  console.log("HACIENDO ONSUBMIT");
}


const llenarPaises = () => {

  paises.forEach((objPais) => {
    let option = document.createElement("option");
    option.innerText = objPais.nombre;
    option.value = objPais.id;
    selectPais.appendChild(option);
  })

}
llenarPaises();


