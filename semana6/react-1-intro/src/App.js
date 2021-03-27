import React from "react";
import Header from "./Header";
import Usuarios from "./Usuarios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const tituloApp = "ReactJS es chévere!";

  const idiomas = ["Español", "Inglés", "Árabe", "Polaco"];

  return (
    <>
      <Header />
      <div>
        <h1>{tituloApp}</h1>
        <hr />
        {
          idiomas.map((idioma, i) => {
            return <p key={i}>{idioma}</p>
          })
        }
      </div >
      <Usuarios />
    </>
  )
}

export default App;