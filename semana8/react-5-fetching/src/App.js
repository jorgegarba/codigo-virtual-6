import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Noticias from './components/Noticias'
// import NoticiasPopulares from './components/NoticiasPopulares';
import { getNewsByTag } from './services/services';

const App = () => {

  const [noticias, setNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
    if (busqueda === "") {
      return
    }
    setCargando(true);
    getNewsByTag(busqueda).then(rpta => {
      setNoticias(rpta.data.articles)
      setCargando(false);
    })
  }, [busqueda]);


  return (
    <>
      <Header setBusqueda={setBusqueda} />
      <main className="container">

        {/* <NoticiasPopulares /> */}

        {
          cargando ?
            <div className="alert alert-primary mt-5">
              <h3>Cargando...</h3>
              <hr />
              <p>Cargando resultados</p>
            </div>
            : noticias.length === 0 ?
              <div className="alert alert-info mt-5">
                <h3>Ups!</h3>
                <p>No tenemos noticias para mostrar, intenta buscar una</p>
              </div>
              :
              <Noticias noticias={noticias} />
        }
      </main>
    </>
  )
}

export default App
