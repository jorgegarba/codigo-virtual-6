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
      <Header />
      <main className="container">
        <Noticias />
      </main>
    </>
  )
}

export default App
