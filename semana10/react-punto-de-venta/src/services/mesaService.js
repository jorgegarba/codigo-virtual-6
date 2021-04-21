import axios from "axios";

import { URL_BACKEND } from "../environments/environments";

export const getMesas = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/mesa`);
  return rpta
}