import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers";

import { Container, List } from "./styles";
import { CartContext } from "../../providers/cart";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      {type === "catalogue" ? (
        <h2> Lista de Produtos:</h2>
      ) : (
        <h2> Carrinho:</h2>
      )}
      <List>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              <p> {item.name} </p>
              <p>R$: {item.price},00</p>
              <Button type={type} item={item} />
            </li>
          ))}

        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index}>
              <p> {item.name} </p>
              <p>R$: {item.price},00</p>
              <Button type={type} item={item} />
            </li>
          ))}
      </List>
    </Container>
  );
};

export default ProductList;
