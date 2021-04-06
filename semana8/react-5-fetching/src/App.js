import React, { useState, useEffect } from 'react'
import { getNewsByTag } from "./services/services";

const App = () => {
  console.log("INICIO COMPONENTE APP");
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("coronavirus");


  useEffect(() => {
    console.log("INICIO DEL USEEFFECT");
    getNewsByTag(busqueda).then(rpta => {
      console.log("LLEGÓ LA DATA");
      setNoticias(rpta.data.articles);
      setCargando(false);
    })
  }, []);

  console.log("ANTES DEL RENDER");
  return (
    <div>

      <form onSubmit={(e) => {
        e.preventDefault();

      }}>
        <input type="search" />
        <button type="submit">Buscar</button>
      </form>

      <hr />
      {
        cargando ?
          <p>CARGANDO...</p> :
          noticias.map(n => {
            return <p>{n.title}</p>
          })
      }


    </div>
  )
}

export default App
