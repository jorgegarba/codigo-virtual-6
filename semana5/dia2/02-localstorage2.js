const formulario = document.getElementById("formulario");
const inputTitulo = document.getElementById("inputTitulo");
const inputDescripcion = document.getElementById("inputDescripcion");
const tbody = document.getElementById("tbody");

let arrayTODOS = [];

formulario.onsubmit = function (e) {
  e.preventDefault();
  if (inputTitulo.value.trim() === "" ||
    inputDescripcion.value.trim() === "") {
    // MOSTRAR ERROR
    return;
  }
  let objTODO = {
    titulo: inputTitulo.value,
    descripcion: inputDescripcion.value
  }
  arrayTODOS.push(objTODO);
  this.reset();
  dibujarTODOS();
}
/**
 * Función que tomar el arrayTODOS y lo dibuja en el <tbody>
 */
const dibujarTODOS = () => {
  // limpiando el tbody antes de hacer nada
  tbody.innerHTML = "";

  arrayTODOS.forEach((objTODO, i) => {
    const tr = document.createElement("tr");
    const tdNro = document.createElement("td");
    const tdTarea = document.createElement("td");
    const tdAcciones = document.createElement("td");
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar"
    // condigurando el evento click para cada botón eliminar
    btnEliminar.onclick = () => {
      eliminarTODO(i);
    }

    tdNro.innerText = i + 1;
    tdTarea.innerHTML = /*html */`
      <h3>${objTODO.titulo}</h3>
      <p>${objTODO.descripcion}</p>`;
    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdNro);
    tr.appendChild(tdTarea);
    tr.appendChild(tdAcciones);

    tbody.appendChild(tr);
  });
}


const eliminarTODO = posicion => {

  /**
   * array.splice(posicion,nro_elementos)
   * Elimina "nro_elementos " de un arreglo a partir de la posición "posicion"
   * 
   * OPCIONALMENTE RETORNA EL ELEMENTO ELIMINADO
   */
  arrayTODOS.splice(posicion, 1);
  dibujarTODOS();
}