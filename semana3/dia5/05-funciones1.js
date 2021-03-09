let dnisDB = ["01542132", "22222222", "33333333"];
let nombresDB = ["Jorge", "Miriam", "Patty"];
let placasDB = ["abc-123", "pol-789", "acx-456"];
let marcaModeloDB = ["Mazda-CX3", "Hyundai-Accent", "Audi-Lemans"];

function buscaPorDni(consultaDNI) {
  if (consultaDNI) {
    for (let i = 0; i < dnisDB.length; i++) {
      console.log(i);
      if (consultaDNI === dnisDB[i]) {
        console.log(nombresDB[i]);
      }
    }
  } else {
    console.log("El dni es erróneo o no se ha enviado");
  }
}

function buscarPorPlaca(consultaPlaca) {
  /**Desarrollar el algoritmo para buscar una placa en el arreglo de placas
   * y mostrar o imprimir la marcaModelo a la que representa
   */
  if (consultaPlaca) {
    for (let i = 0; i < placasDB.length; i++) {
      if (placasDB[i] === consultaPlaca) {
        console.log(marcaModeloDB[i]);
        return;
      }
    }
  } else {
    console.log("No se ha enviado la placa");
    return;
  }

  console.log("No se ha encontrado la placa solicitada");
}

let dni = "33333333";
let placa = "abc-123";

buscaPorDni(dni);
buscarPorPlaca(placa);




/**
 * Función que recibe un monto y retorna otro respecto del tipo de cambio o el 
 * modo
 * @param {number} monto Cantidad de dinero que se desea cambiar
 * @param {string} modo "pen-US" ó "US-pen" retornará el cambio correspondiente,
 * por defecto, el valor del modo es "pen-US"
 * @return {number} Se retorna el valor convertido
 */
function cambioMoneda(monto, modo = "pen-US") {
  let tCambio = 3.7;
  if (modo === "pen-US") {
    return (monto / tCambio).toFixed(2);
  } else if (modo === "US-pen") {
    return (monto * tCambio).toFixed(2);
  } else {
    return -1;
  }
  console.log("HASTA PRONTO, GRACIAS POR USAR LA FUNCIÓN");
}

let resultado = cambioMoneda(3_500, "US-pen");

console.log(resultado);

console.log(cambioMoneda(5_000, "pen-US"));
console.log(cambioMoneda(6, "US-pen"));
console.log(cambioMoneda(3_450, "pen-US"));
console.log(cambioMoneda(900, "pen-US"));
console.log(cambioMoneda(20, "pen-US"));
console.log(cambioMoneda(3.400, "pen-US"));
