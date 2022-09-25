import { useContext, useState } from "react";
import { ProductsContext } from "../../App";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const CardContainer = () => {
  const products = useContext(ProductsContext);
  return (
    <div className='grid grid-cols-4 col-span-4 gap-4 tracking-wide leading-normal'>
      {products.slice(0, 12).map((product) => (
        <Card {...product} key={product.id} />
      ))}
    </div>
  );
};

export default CardContainer;

function Card({ images, title, price, description }) {
  const [love, setLove] = useState(false);
  const handleLove = () => {
    setLove((c) => !c);
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
            onClick={handleLove}
            className={`flex items-center border rounded hover:border-rose-300 hover:text-rose-600  px-3 py-1 gap-1  ${
              love
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
