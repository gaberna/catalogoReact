import React from "react";
import styled from "styled-components";
import CtaCteCheck from "./CtaCteCheck";
import CtaCteOk from "./CtaCteOk";
import Prod from "./Prod";
import Button from "../styled/Button";

/* const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
 */
const Container = styled.div`
  text-align: center;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

class Catalogo extends React.Component {
  state = {
    stock: false,
    descuentoXMayor: true,
    ctaCte: true,
    cargando: false,
    data: []
  };

  componentDidMount() {
    this.setState({ cargando: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, cargando: false }));
  }

  toggleStockNoStock = () => {
    this.setState(prevEstate => ({
      stock: !prevEstate.stock
    }));
  };

  render() {
    const { prods } = this.props;
    return (
      <Wrapper>
        <div>
          {this.state.ctaCte ? <CtaCteOk /> : <CtaCteCheck />}
          <Title>
            Actualmente{this.state.stock ? " HAY Stock" : " NO HAY stock"}
          </Title>
          <Button onClick={this.toggleStockNoStock}>Comprar</Button>
          {this.state.cargando ? (
            "Cargando..."
          ) : (
            <Container>
              {this.state.data.map(product => (
                <div key={product.id}>
                  <h2>El Producto estrella de esta semana es:</h2>
                  <h3>{product.name}</h3>
                  <img
                    alt={product.name}
                    src="https://picsum.photos/id/0/400/600"
                    height={150}
                  />
                </div>
              ))}
            </Container>
          )}
          <Container>
            {prods.map((prods, i) => (
              <Prod
                key={i}
                codigo={prods.codigo}
                descripcion={prods.descripcion}
                grupo={prods.grupo}
                division={prods.division}
                precio={prods.precio}
                descuentoXMayor={this.state.descuentoXMayor}
              />
            ))}
          </Container>
        </div>
      </Wrapper>
    );
  }
}

export default Catalogo;
