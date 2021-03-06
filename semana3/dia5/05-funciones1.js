let dnisDB = ["01542132", "22222222", "33333333"];
let nombresDB = ["Jorge", "Miriam", "Patty"];
let placasDB = ["abc-123", "pol-789", "acx-456"];
let marcaModeloDB = ["Mazda-CX3", "Hyundai-Accent", "Audi-Lemans"];

function buscaPorDni(consultaDNI) {
  for (let i = 0; i < dnisDB.length; i++) {
    if (consultaDNI === dnisDB[i]) {
      console.log(nombresDB[i]);
    }
  }
}

let dni = "33333333";
let placa = "abc-123";


buscaPorDni(dni);