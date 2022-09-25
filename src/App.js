import { createContext, useEffect, useState } from "react";
import Categories from "./components/header/categories";
import Header from "./components/header/header";
import CardContainer from "./components/main/card-container";
import CategoriesContainer from "./components/main/categories-container";
import Spinner from "./components/others/spinner";
const ProductsContext = createContext();
const CategoriesContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    return () => {};
  }, []);

  return products.length && categories.length ? (
    <CategoriesContext.Provider value={categories}>
      <ProductsContext.Provider value={products}>
        {/* only single value can be passed */}
        <div>
          <Header />
          <Categories />
          <section className='grid grid-cols-5 container mx-auto'>
            <CategoriesContainer />
            <CardContainer />
          </section>
        </div>
      </ProductsContext.Provider>
    </CategoriesContext.Provider>
  ) : (
    <Spinner />
  );
}
export { ProductsContext, CategoriesContext };
export default App;
