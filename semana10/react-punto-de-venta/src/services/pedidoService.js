import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const postPedido = async (objPedido) => {

  const rpta = axios.post(
    `${URL_BACKEND}/pedido`,
    JSON.stringify(objPedido),
    {
      headers: {
        "Content-type": "application/json"
      }
    });
  return rpta;

}