import React from 'react'
import Header from "./componentes/Header"
import Main from "./componentes/Main";

import { cursos } from "./data/data";

const App = () => {
  return (
    <>
      <Header />
      <Main listaCursos={cursos} />
    </>
  )
}

export default App
