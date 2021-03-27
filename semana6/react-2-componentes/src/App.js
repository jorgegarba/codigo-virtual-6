import React from 'react'
import Header from "./components/Header"
import Categorias from "./components/Categorias"
import Peliculas from "./components/Peliculas";
const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <Categorias />
          <Peliculas />
        </div>
      </main>
    </>
  )
}

export default App
