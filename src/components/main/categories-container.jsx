import { useContext } from "react";
import { CategoriesContext } from "../../App";
import { BiCategory } from "react-icons/bi";
const CategoriesContainer = () => {
  const categories = useContext(CategoriesContext);
  return (
    <div className=''>
      <div className='bg-white border rounded-lg py-2 my-4 border-blue-300'>
        <p className='text-2xl font-semibold leading-9 justify-center gap-2 text-blue-700 flex items-center'>
          <BiCategory />
          Departments
        </p>
      </div>
      {categories.map((category) => (
        <p
          key={category.id}
          className='py-2 cursor-pointer w-max font-medium tracking-wide leading-normal text-gray-900'
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default CategoriesContainer;
