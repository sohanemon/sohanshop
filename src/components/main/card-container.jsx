import { useContext } from "react";
import { ProductsContext } from "../../App";

const CardContainer = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <div className='grid grid-cols-4'>
      <div>
        <img src={products[1].images[1]} alt='' />
        <div>
          <p className='text-gray-900'>{products[1].title}</p>
          <p className='text-2xl font-bold leading-9 text-black text-opacity-90'>
            ${products[1].price}
          </p>
          <p className='text-gray-500'>{products[1].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
