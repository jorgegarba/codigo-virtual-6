import React, { useEffect } from 'react'
import socketIOClient from "socket.io-client";
const ENPOINT = "https://codigo4-pos.herokuapp.com/"


const App = () => {


  useEffect(() => {

    const socket = socketIOClient(ENPOINT);

    socket.on("reporte-dashboard", (data) => {
      console.log(JSON.parse(data));
    })

  }, [])

  return (
    <div>
      HOLIS
    </div>
  )
}

export default App
