import {fire} from "../config/firebase";

// necesitamos crear una referencia a nuestra bd
const db = fire.firestore()

const crearDocumento = (objDocumento) => {
  // hago ref a mi db, le indico que coleccion quiero trabajar y le añado el documento
  //el documento a añadir es un objeto
  //los metodos que utiliza firebase van a trbajar devolviendo promesas
  return db.collection("documentos").add({...objDocumento})
  // resolve (exito) then(), reject(error) catch
}

// tenemos que exportarla
export {
  crearDocumento
}