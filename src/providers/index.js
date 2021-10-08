import { CatalogueProvider } from "./catalogue";
import { CartProvider } from "./cart";

const Provider = ({ children }) => {
  return (
    <CatalogueProvider>
      <CartProvider>{children}</CartProvider>
    </CatalogueProvider>
  );
};
export default Provider;
