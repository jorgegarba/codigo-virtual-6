import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const getPlatos = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/plato`);
  return rpta;
}