const formulario = document.getElementById("formulario");
const inputTitulo = document.getElementById("inputTitulo");
const inputDescripcion = document.getElementById("inputDescripcion");

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

}