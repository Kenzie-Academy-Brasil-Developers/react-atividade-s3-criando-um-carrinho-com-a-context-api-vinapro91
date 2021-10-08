import "./App.css";
import ProductList from "./components/product-list";
import Provider from "./providers";

function App() {
  return (
    <div className="App">
      <Provider>
        <ProductList type="catalogue" />
        <ProductList type="cart" />
      </Provider>
    </div>
  );
}

export default App;
