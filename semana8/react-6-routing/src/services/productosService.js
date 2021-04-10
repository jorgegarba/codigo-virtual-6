import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";


export const getProductos = async () => {
  const rpta = await axios.get(URL_BACKEND + "/productos");
  return rpta;
}

export const getProductosByTag = async (tag) => {
  const rpta = await axios.get(URL_BACKEND + "/productos?search=" + tag);
  return rpta;
}