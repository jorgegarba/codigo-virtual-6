export const API = "algo";
export const despedida = () => {
  console.log("despidiéndonos");
}

const saludar = () => {
  console.log("saludando");
}

// solo se puede usar export default
// una sola vez por archivo JS
export default saludar;