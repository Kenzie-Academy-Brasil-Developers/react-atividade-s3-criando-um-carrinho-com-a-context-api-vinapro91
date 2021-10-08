import "./App.css";
import ProductList from "./components/product-list";
import Provider from "./providers";
import { CartProvider } from "./providers/cart";
import { CatalogueProvider } from "./providers/catalogue";

function App() {
  return (
    <div className="App">
      {/* <CatalogueProvider>
        <CartProvider> */}
      <Provider>
        <ProductList type="catalogue" />
        <ProductList type="cart" />
      </Provider>
      {/* </CartProvider>
      </CatalogueProvider> */}
    </div>
  );
}

export default App;
