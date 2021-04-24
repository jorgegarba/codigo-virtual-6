import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const getPlatos = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/plato`);
  return rpta;
}

export const postPlato = async (objPlato) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/plato`,
    JSON.stringify(objPlato),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
}