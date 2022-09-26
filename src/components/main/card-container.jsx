import { useContext, useEffect, useState } from "react";
import { CategoriesContext, ProductsContext } from "../../App";
import { AiFillStar } from "react-icons/ai";
import Spinner2 from "../others/spinner2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { addToLS } from "../../util/add-to-ls";
const CardContainer = () => {
  const { selectedCategory } = useContext(CategoriesContext);
  const [categorizedProduct, setCategorizedProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`
    )
      .then((res) => res.json())
      .then((data) => setCategorizedProduct(data));

    return () => {};
  }, [selectedCategory]);

  const products = useContext(ProductsContext);

  return (
    <div className='grid grid-cols-4 col-span-4 gap-4 tracking-wide leading-normal'>
      {!selectedCategory &&
        products
          .slice(0, 12)
          .map((product) => <Card {...product} key={product.id} />)}{" "}
      {!categorizedProduct && <Spinner2 data={categorizedProduct} />}
      {selectedCategory &&
        categorizedProduct
          .slice(0, 12)
          .map((product) => <Card {...product} key={product.id} />)}
    </div>
  );
};

export default CardContainer;

function Card({ id, images, title, price, description }) {
  const [loved, setLoved] = useState(false);
  useEffect(() => {
    updateLove();
    console.log("first");
    return () => {};
  });
  const handleWishlist = () => {
    addToLS(id);
    updateLove();
  };
  const updateLove = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlist.loved.includes(id)) setLoved(true);
    else setLoved(false);
  };
  return (
    <div className='p-4  rounded '>
      <img
        src={images && images[0]}
        alt=''
        className='h-56 w-full object-cover'
      />
      <div>
        <p className='text-gray-900 text-xl mt-3'>{title}</p>
        <p className='text-2xl font-bold leading-9 text-black text-opacity-90 my-2'>
          ${price}
        </p>
        <p className='text-gray-500'>{description.slice(0, 61)} ...</p>
        <div className='flex items-center justify-between my-2'>
          <div className='text-yellow-500 flex items-center '>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className='text-sm font-medium leading-snug text-gray-500 ml-2'>
              5
            </p>
          </div>
          <button
            onClick={() => handleWishlist()}
            className={`flex items-center border rounded hover:border-rose-300 hover:text-rose-600  px-3 py-1 gap-1  ${
              loved
                ? "border-rose-300 text-rose-600 "
                : "text-blue-700 border-blue-300"
            }`}
          >
            <MdOutlineFavoriteBorder />
            Love It
          </button>
        </div>
      </div>
    </div>
  );
}
