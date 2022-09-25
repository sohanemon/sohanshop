import { GiArmoredPants, GiClothes, GiElectric } from "react-icons/gi";
import { FcFilmReel } from "react-icons/fc";
import { FiMusic } from "react-icons/fi";
import { BiDumbbell } from "react-icons/bi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsTreeFill } from "react-icons/bs";
import { MdOutlineToys, MdPets } from "react-icons/md";
const Categories = () => {
  return (
    <>
      <div className='flex container mx-auto my-6  justify-evenly text-gray-500 text-3xl gap-2'>
        {data.map((el, i) => (
          <Category key={i} el={el} />
        ))}
      </div>
    </>
  );
};

export default Categories;

const data = [
  {
    icon: <GiClothes />,
    title: "clothing",
  },
  {
    icon: <FcFilmReel />,
    title: "entertainment",
  },
  {
    icon: <FiMusic />,
    title: "Music",
  },
  {
    icon: <BiDumbbell />,
    title: "Dumbbell",
  },
  {
    icon: <MdPets />,
    title: "Pets",
  },
  {
    icon: <TbToolsKitchen2 />,
    title: "Kitchen",
  },
  {
    icon: <GiArmoredPants />,
    title: "Pants",
  },
  {
    icon: <BsTreeFill />,
    title: "Garden",
  },
  {
    icon: <GiElectric />,
    title: "Electronics",
  },
  {
    icon: <MdOutlineToys />,
    title: "Toys",
  },
];

function Category({ el }) {
  return (
    <div className='flex flex-col  items-center gap-2'>
      {el.icon}
      <p className='text-base tracking-wider capitalize'>{el.title}</p>
    </div>
  );
}
