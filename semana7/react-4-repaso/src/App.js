import React,{ useState } from "react";
import { productos } from "./data";
import ListaProductos from "./components/ListaProductos"

export default function App() {
  // const [estado, FuncionQueActualiza] = useState(estado_inicial)
  const [carrito, setCarrito] = useState([])

  const agregarACarrito = (nuevoProducto) => {
    setCarrito([...carrito, nuevoProducto ])
  }

  return <div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <ListaProductos 
            productos={productos}
            numero={100}
            agregarACarrito={agregarACarrito}
          />
        </div>
      </div>
    </div>
  </div>;
}
