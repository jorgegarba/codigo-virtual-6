import React,{ useState } from "react";
import { productos } from "./data";
import ListaProductos from "./components/ListaProductos"
import Carrito from "./components/Carrito"

export default function App() {
  // const [estado, FuncionQueActualiza] = useState(estado_inicial)
  const [carrito, setCarrito] = useState([])

  const agregarACarrito = (nuevoProducto) => {
    setCarrito([...carrito, nuevoProducto ])
  }

  return <div>
    <div className="container">
      <h1 className="my-4">
        Tiendita
      </h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <ListaProductos 
            productos={productos}
            numero={100}
            agregarACarrito={agregarACarrito}
          />
        </div>
        <div className="col-12 col-md-6">
          <Carrito carrito={carrito}/>
        </div>
      </div>
    </div>
  </div>;
}
