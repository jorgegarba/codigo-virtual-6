let mascotaPerdida = {
  raza: "Bull Terrier",
  colores: ["negro", "blanco", "cafe"],
  encontradoEn: "Av. Arequipa",
  alturaMetros: 0.5,
  edadAprox: 1.5,
  nroContacto: "974854123",
  genero: "macho"
}

console.log(`Raza: ${mascotaPerdida.raza}`);
console.log(`Altura aproximada: ${mascotaPerdida["alturaMetros"]} metros`);

for (const color of mascotaPerdida.colores) {
  console.log(color);
}

let chancho = mascotaPerdida;
// ¿Cómo sacar una copia a un objeto en una nueva dirección de memoria?
let kyra = { ...mascotaPerdida };
kyra.colores = ["blanco"];
console.log(kyra);
console.log(mascotaPerdida);

console.log("******************");


chancho.edadAprox = 0.5;
chancho.colores = ["blanco", "negro"];
console.log(chancho);
console.log(mascotaPerdida);





console.log("-------------------------------------------------------");

const MascotaConstructor = function (_raza, _colores,
  _encontradoEn, _alturaMetros,
  _edadAprox, _nroContacto, _genero) {
  let mascotaPerdida = {
    raza: _raza || "",
    colores: _colores || [],
    encontradoEn: _encontradoEn || "",
    alturaMetros: _alturaMetros || 0,
    edadAprox: _edadAprox || 0,
    nroContacto: _nroContacto || "",
    genero: _genero || ""
  }
  return mascotaPerdida;
}

let fido = MascotaConstructor("Pitbull", ["negro", "blanco"], "Av. Progreso", 0.5, 2, "95474123", "macho");
let sasha = MascotaConstructor();
console.log(fido)
console.log(sasha)
fido.raza = "Pitbull"
fido.alturaMetros = 0.3
sasha.genero = "hembra"
sasha.raza = "Puddle"
console.log(fido)
console.log(sasha)