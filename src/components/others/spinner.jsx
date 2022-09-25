import { ImSpinner9 } from "react-icons/im";

function Spinner() {
  return (
    <div className='h-screen grid place-content-center text-7xl text-blue-500'>
      <ImSpinner9 className='animate-spin' />
    </div>
  );
}
export default Spinner;
