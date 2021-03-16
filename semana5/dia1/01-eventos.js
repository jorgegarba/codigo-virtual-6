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
  { id: 22, nombre: "Lima", idPais: 12343, stock: true },
  { id: 23, nombre: "Puno", idPais: 12343, stock: false },
  { id: 24, nombre: "Wujan", idPais: 13, stock: false },
  { id: 25, nombre: "Acapulco", idPais: 12, stock: true },
  { id: 26, nombre: "Fujian", idPais: 13, stock: false },
  { id: 27, nombre: "Buenos Aires", idPais: 19, stock: true },
  { id: 28, nombre: "Cordova", idPais: 19, stock: false },
  { id: 29, nombre: "Tulum", idPais: 12, stock: true },
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
  selectPais.innerHTML = "<option value='0' selected disabled>Seleccione un país</option>";
  paises.forEach((objPais) => {
    let option = document.createElement("option");
    option.innerText = objPais.nombre;
    option.value = objPais.id;
    selectPais.appendChild(option);
  })
}
llenarPaises();


const llenarDepartamentosByIdPais = (idPaisSeleccionado) => {

  selectDepartamento.innerHTML = "<option value='0' selected>Seleccione un Departamento</option>"

  if (idPaisSeleccionado === 0) {
    selectDepartamento.setAttribute("disabled", "disabled");
    return;
  }

  let depasPorPais = departamentos.filter((objDpto) => {
    if (objDpto.idPais === idPaisSeleccionado) {
      return objDpto;
    }
  });
  depasPorPais.forEach((objDepa) => {
    let option = document.createElement("option");
    option.innerText = objDepa.nombre;
    option.value = objDepa.id;

    // !objDepa.stock && option.setAttribute("disabled", "disabled")
    if (objDepa.stock === false) {
      option.setAttribute("disabled", "disabled")
    }


    selectDepartamento.appendChild(option);
  })
  // elemento.removeAttribute("atributo") => remueve o borra un atributo de un elemento
  selectDepartamento.removeAttribute("disabled");

}

/**
 * onchange => evento que se dispara cuando el valor del select cambia
 */
selectPais.onchange = () => {
  let idPaisSeleccionado = +selectPais.value;
  llenarDepartamentosByIdPais(idPaisSeleccionado);
}

