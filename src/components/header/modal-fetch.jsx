import { useEffect, useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { addToLS } from "../../util/add-to-ls";

const ModalFetch = ({ id, setReload }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(` https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
    return () => {};
  });

  if (!loading)
    return (
      <div className='grid grid-cols-5 text-gray-800 mb-4 gap-4'>
        <img
          className='col-span-2'
          src={item.images && item.images[0]}
          alt={item.title && item.title}
        />
        <div className='col-span-3 relative'>
          <h2 className='text-right text-3xl font-semibold'>
            ${item.price && item.price}
          </h2>
          <p className='font-medium text-lg'>{item.title && item.title}</p>
          <p className='text-gray-500'>
            {item.description && item.description}
          </p>
          <div className='absolute flex gap-5 bottom-4 right-4'>
            <button
              onClick={() => {
                addToLS(id);
                setReload((p) => p + 1);
              }}
              className='font-semibold hover:ring-1 active:scale-95 rounded-full px-3 ring-gray-600'
            >
              Remove
            </button>
            <button className='text-blue-500 bg-blue-50 hover:bg-blue-100 px-4 py-2 font-semibold rounded flex gap-2 items-center'>
              <MdPlaylistAdd className='text-xl' />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  else return <h1> ... </h1>;
};

export default ModalFetch;
