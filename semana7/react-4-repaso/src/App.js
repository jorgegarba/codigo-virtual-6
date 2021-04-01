import React from "react";
import { productos } from "./data";
import ListaProductos from "./components/ListaProductos"

export default function App() {

  return <div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <ListaProductos 
            productos={productos}
            numero={100}
          />
        </div>
      </div>
    </div>
  </div>;
}
