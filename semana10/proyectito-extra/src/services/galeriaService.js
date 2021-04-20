import {fire, firebase} from "../config/firebase";

// necesitamos crear una referencia a nuestra bd
const db = fire.firestore()

const crearDocumento = (objDocumento) => {
  // hago ref a mi db, le indico que coleccion quiero trabajar y le añado el documento
  //el documento a añadir es un objeto
  //los metodos que utiliza firebase van a trbajar devolviendo promesas
  return db.collection("documentos").add({...objDocumento})
  // resolve (exito) then(), reject(error) catch
}

// nombre de nuestro archivo a subir y el archivo en si
const subirArchivos = (nombreArchivo, Archivo) => {
  // referencia para subirlo a firebase
  const refStorage = firebase.storage().ref(`fotos/${nombreArchivo}`)
  // tarea de subida
  const tarea = refStorage.put(Archivo)
  // escuchamos al evento state_changed
  tarea.on("state_changed",
    ()=>{}, //función para evaluar la subida
    ()=>{}, //función para manejar errores
    ()=>{ //función cuando ya termino la subida
      // aquí ya tengo la URL de descarga
      tarea.snapshot.ref.getDownloadURL()
      .then(urlImagen => {
        console.log(urlImagen)
      })
    }
  )
}

// tenemos que exportarla
export {
  crearDocumento,
  subirArchivos

}