import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const postLogin = async (objLogin) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/login`,
    JSON.stringify(objLogin), {
    headers: {
      "Content-type": "application/json"
    }
  });
  console.log(rpta);
  return rpta;
}