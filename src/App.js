import { createContext, useEffect, useState } from "react";
import Categories from "./components/header/categories";
import Header from "./components/header/header";
import CardContainer from "./components/main/card-container";
const ProductsContext = createContext();
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    return () => {};
  }, []);

  return products.length ? (
    <ProductsContext.Provider value={products}>
      {/* only single value can be passed */}
      <div>
        <Header />
        <Categories />
        <CardContainer />
      </div>
    </ProductsContext.Provider>
  ) : null;
}
export { ProductsContext };
export default App;
