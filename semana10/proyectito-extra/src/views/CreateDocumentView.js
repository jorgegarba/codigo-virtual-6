import React from 'react'
import {crearDocumento} from "../services/galeriaService"
// es una especie de hook, que ya trae hook forms
import {useForm} from "react-hook-form"

function CreateDocumentView() {
  //register, va a servir para registrar c/input de nuestro form
  //handleSubmit, para manejar el Submit del Formulario,
  //errors, para manejar los errores de los input
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  // recibe de forma automática data, data es un objeto con toda la info de los input registrados y sus valores
  let escucharSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(escucharSubmit)}>
        <div className="form-group">
          <label>Nombre Imagen</label>
          {/* cuando Uds registren inputs automaticamente con esos datos se creará un objeto con esos campos */}
          <input 
            type="text"
            {...register("nombre", { required: true })} 
            className="form-control"
          />
          {errors.nombre && 
            <small className="text-danger">
              El nombre de la foto es obligatorio
            </small>
          }
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Agregar Foto
        </button>
      </form>
    </div>
  )
}

export default CreateDocumentView
