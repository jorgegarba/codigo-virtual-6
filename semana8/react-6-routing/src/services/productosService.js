import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";


export const getProductos = async () => {
  const rpta = await axios.get(URL_BACKEND + "/productos");
  return rpta;
}