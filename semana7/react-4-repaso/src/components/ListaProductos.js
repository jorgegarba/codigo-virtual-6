import React from "react";
import CardProducto from "./CardProducto";

const ListaProductos = (
  { numero, productos, agregarACarrito }
  ) => {
  return (
    <div>
      <h1>Mis Productos</h1>
      <div className="row">
        {productos.map((prod, indice) => (
          <CardProducto
            prod={prod}
            key={indice}
            agregarACarrito={agregarACarrito}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
