import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
const Header = () => {
  return (
    <div className='w-full mx-auto'>
      <div className='text-lg text-gray-600 flex items-center justify-evenly my-4 '>
        <Left />
        <div className='flex items-center bg-gray-100 rounded-full px-3 py-2 justify-between mx-10'>
          <FaSearch />
          <input
            className=' bg-gray-100  placeholder:text-center outline-none'
            placeholder='useless items'
            type='text'
          />
          <MdCancel />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Header;

function Left({}) {
  return (
    <div className='flex items-center gap-4 '>
      <div className='inline-flex space-x-3 items-center justify-end'>
        <div className='relative bg-gradient-to-r from-blue-500 to-indigo-800 rounded-md'>
          <p className='w-10 h-10 text-3xl font-bold leading-9 text-center text-white'>
            S
          </p>
        </div>
        <a href='/' className='text-2xl font-medium leading-9 text-gray-800'>
          SohanShop
        </a>
      </div>
      <a href='/' className=''>
        Sell on Shop
      </a>
      <a href='/' className=''>
        Register
      </a>
    </div>
  );
}

function Right({}) {
  const buttonStyle =
    "bg-gray-100 rounded shadow text-blue-700 px-3 py-1 ring ring-1";
  return (
    <div className='flex items-center gap-4 '>
      <a href='/' className=' text-blue-700 mr-10'>
        Consumer Electronics
      </a>
      <div className='flex items-center gap-3'>
        <button className={buttonStyle}>Sign in</button>
        <button className={buttonStyle}>My Cart</button>
        <img
          className='w-10'
          src='https://github.com/sohanemon/sohanemon/raw/main/images/me.png'
          alt=''
        />
      </div>
    </div>
  );
}
