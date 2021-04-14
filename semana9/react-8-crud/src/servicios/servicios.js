import axios from "axios";

const URL_BACKEND = "https://606fa26685c3f0001746ebdc.mockapi.io";

export const getProductos = async () => {
  const rpta = await axios.get(`${URL_BACKEND}/productos`);
  return rpta;
};

export const deleteProductoById = async (id) => {
  const rpta = await axios.delete(`${URL_BACKEND}/productos/${id}`);
  return rpta;
};

export const postProducto = async (objProducto) => {
  const rpta = await axios.post(
    `${URL_BACKEND}/productos`,
    JSON.stringify(objProducto),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );

  return rpta;
};

export const getProductoById = async (id) => {
  const rpta = await axios.get(`${URL_BACKEND}/productos/${id}`);
  return rpta;
};

export const putProductoById = async (objProducto) => {
  const rpta = await axios.put(
    `${URL_BACKEND}/productos/${objProducto.id}`,
    JSON.stringify(objProducto),
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  );
  return rpta;
};
