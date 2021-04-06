import React, { useState, useEffect, useRef } from 'react'
import { getNewsByTag } from "./services/services";

const AppVersionLite = () => {
  console.log("INICIO COMPONENTE APP");
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("coronavirus");
  const refInputBusqueda = useRef();


  useEffect(() => {
    console.log("INICIO DEL USEEFFECT");
    getNewsByTag(busqueda).then(rpta => {
      console.log("LLEGÓ LA DATA");
      setNoticias(rpta.data.articles);
      setCargando(false);
    })
  }, [busqueda]);

  console.log("ANTES DEL RENDER");

  const handleSubmit = (e) => {
    e.preventDefault();
    let termino = refInputBusqueda.current.value;
    setBusqueda(termino);
    setCargando(true);
  }


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="search" ref={refInputBusqueda} />
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

export default AppVersionLite
