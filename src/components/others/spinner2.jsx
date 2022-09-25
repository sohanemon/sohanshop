import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
const Spinner2 = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    return () => {};
  }, []);

  if (isLoading)
    return (
      <div className='h-full col-span-full grid place-content-center text-3xl text-gray-500'>
        <FiLoader className='animate-spin' />
      </div>
    );
};

export default Spinner2;
