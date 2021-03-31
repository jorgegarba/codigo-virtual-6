import React, { useState } from 'react'
import Curso from "./Curso";
import CursoSeleccionado from './CursoSeleccionado';

const Main = (props) => {

  const [cursoSelected, setCursoSelected] = useState(null);

  const miFuncion = (objCurso) => {
    setCursoSelected(objCurso);
  }

  return (
    <main className="main">
      <CursoSeleccionado cursoSelected={cursoSelected} />

      <section className="cursos">
        {
          props.listaCursos.map((objCurso) => {
            return <Curso objCurso={objCurso}
                          funcion={miFuncion}
                          key={objCurso.id} />
          })
        }
      </section>

    </main>
  )
}

export default Main
