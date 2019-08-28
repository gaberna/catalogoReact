/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from "react";

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

const Prod = ({ grupo, descripcion, division, codigo, precio }) => {
  return (
    <section>
      <h2>Grupo:{grupo}</h2>
      <p>Descripción:{descripcion}</p>
      <p>Division:{division}</p>
      <p>codigo:{codigo}</p>
      <p>Precio: AR$ {precio}</p>
    </section>
  );
};

class Catalogo extends React.Component {
  state = { stock: false };

  toggleStockNoStock = () => {
    this.setState(prevEstate => ({
      stock: !prevEstate.stock
    }));
  };

  render() {
    const { prods } = this.props;
    return (
      <div>
        <h1>
          Actualmente
          {this.state.stock ? " HAY Stock" : " NO HAY stock"}
        </h1>       
        <button onClick={this.toggleStockNoStock}>Comprar</button>

        {prods.map((prods, i) => (
          <Prod
            key={i}
            codigo={prods.codigo}
            descripcion={prods.descripcion}
            grupo={prods.grupo}
            division={prods.division}
            precio={prods.precio}
          />
        ))}
      </div>
    );
  }
}

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
