/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from "react";
import Catalogo from "./Catalogo";

let productList = [
  {
    grupo: "Cofler Macizo",
    descripcion: "Chocolinas",
    codigo: 1010353,
    division: "Chocoaltes",
    precio: 23.5
  },
  {
    grupo: "Cofler Macizo",
    descripcion: "Leche",
    codigo: 1010348,
    division: "Chocoaltes",
    precio: 28.5
  },
  {
    grupo: "Cofler Macizo",
    descripcion: "Almendras",
    codigo: 1010359,
    division: "Chocoaltes",
    precio: 27.5
  }
];

class Producto extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <p>Catalago - Bienvenido</p>
        <Catalogo prods={productList} />
      </div>
    );
  }
}

export default Producto;
