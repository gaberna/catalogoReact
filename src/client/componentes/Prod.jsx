import React from "react";

const Prod = ({ grupo, descripcion, division, codigo, precio, descuentoXMayor}) => {
  return (
    <section>
      <h2>Grupo:{grupo}</h2>
      <p>Descripción:{descripcion}</p>
      <p>Division:{division}</p>
      <p>codigo:{codigo}</p>
      <p>Precio: AR$ {precio}</p>
      <p>Descuento x Mayor: {descuentoXMayor ? "SI!" : "No, Sorry"}</p>
    </section>
  );
};

export default Prod;
