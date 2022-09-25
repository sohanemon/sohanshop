import { useContext } from "react";
import { CategoriesContext } from "../../App";
import { BiCategory } from "react-icons/bi";
const CategoriesContainer = () => {
  const { categories, setSelectedCategory, selectedCategory } =
    useContext(CategoriesContext);
  return (
    <div className=''>
      <div className='bg-white border rounded-lg py-2 my-4 border-blue-300'>
        <p className='text-xl font-semibold leading-9 justify-center gap-2 text-blue-700 flex items-center'>
          <BiCategory />
          Categories
        </p>
      </div>
      {categories.map((category) => (
        <p
          onClick={() => setSelectedCategory(category.id)}
          key={category.id}
          className={`${
            category.id === selectedCategory
              ? "text-blue-800 font-extrabold "
              : "text-gray-900"
          } py-2 cursor-pointer w-max font-medium tracking-wider leading-normal `}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default CategoriesContainer;
