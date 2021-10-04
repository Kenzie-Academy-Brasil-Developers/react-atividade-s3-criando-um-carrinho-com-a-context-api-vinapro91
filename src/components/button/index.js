import { useContext } from "react";
import { CatalogueContext } from "../../providers";
import { CartContext } from "../../providers/cart";
import { ButtonStyled } from "./styles";

const Button = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { addToCatalogue, removeFromCatalogue } = useContext(CatalogueContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>;
};

export default Button;
