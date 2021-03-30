import React from 'react'
import Curso from "./Curso";

const Main = (props) => {

  return (
    <main className="container">
      {
        props.listaCursos.map((objCurso) => {
          return <Curso objCurso={objCurso} />
        })
      }
    </main>
  )
}

export default Main
