import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Noticias from './components/Noticias'
import { getNewsByTag } from './services/services';

const App = () => {

  const [noticias, setNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");



  useEffect(() => {
    if (busqueda === "") {
      return
    }
    getNewsByTag(busqueda).then(rpta => {
      setNoticias(rpta.data.articles)
    })
  }, [busqueda]);


  return (
    <>
      <Header setBusqueda={setBusqueda} />
      <main className="container">
        <Noticias noticias={noticias} />
      </main>
    </>
  )
}

export default App
