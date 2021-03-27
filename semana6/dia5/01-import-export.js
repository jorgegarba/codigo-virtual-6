import { API as APInuevoNombre, despedida } from "./data.js";
import funcionSaludar from "./data.js";
import * as funciones from "./data.js"

import miLibreria from "./data2.js";

console.log(APInuevoNombre);
funcionSaludar();
despedida();

console.log(funciones.API);

console.log(miLibreria.API_BACKEND);
miLibreria.getDatos()
miLibreria.getProductos()