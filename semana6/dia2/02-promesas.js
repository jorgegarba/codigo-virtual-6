/**
 * Creación de una promesa
 */
const obtenerDeudores = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(["Max", "Bryan", "Michelle"]);
      reject("Tiempo de espera agotado")
    }, 2500);
  })
}

/**
 * Consumo de una promesa
 */
obtenerDeudores().then((rpta) => {
  console.log(rpta);
}).catch((error) => {
  console.log(error);
})