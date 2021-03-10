function Ingrediente(_nombre, _cantidad, _unidadMedida) {
  this.nombre = _nombre || "";
  this.cantidad = _cantidad || 0;
  this.unidadMedida = _unidadMedida || "";
}

function Receta() {
  this.nombre = "";
  // Un ingrediente tiene la estructura de la clase Ingrediente,
  this.ingredientes = [];
  this.tiempo = 0;
  this.tipo = "";
  this.info = function () {
    console.log(`El plato ${this.nombre} es un plato ${this.tipo} y su tiempo de preparación es de ${this.tiempo} horas.`);
  }
}

let cebiche = new Receta();
cebiche.nombre = "Cebiche";
cebiche.tipo = "Marino";
cebiche.tiempo = 1;
/*¿Cómo agregar un ingrediente al cebichito?*/
cebiche.ingredientes.push(new Ingrediente("Pescado", 1, "Kilogramo"));
cebiche.ingredientes.push(new Ingrediente("Cebolla", 2, "Cabezas"));
console.log(cebiche);
cebiche.info();

let chaufaDePollo = new Receta();
chaufaDePollo.nombre = "Chaufa de pollo"
chaufaDePollo.tipo = "Oriental"
chaufaDePollo.tiempo = 1.2;
console.log(chaufaDePollo);
chaufaDePollo.info();