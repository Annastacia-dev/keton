import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const EqaDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="hover:underline flex flex-row items-center justify-center uppercase"
        onClick={toggle}
      >
        eqa
        {isOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-primaryBlue w-72 h-52 flex flex-col items-center gap-2 justify-center rounded shadow-lg z-[20] ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link
          to="/eqa/programs"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          EQA programs
        </Link>
        <hr className="w-3/4 my-2" />
        <Link
          to="/eqa/process"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          EQA process
        </Link>
        <hr className="w-3/4 my-2" />
        <Link
          to="/eqa/rca-resources"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          RCA resources
        </Link>
          <hr className="w-3/4 my-2" />
          <Link to='https://teqa.esfeqa.eu/Default.aspx?ReturnUrl=%2fProtectedApp%2fApplicationHome.aspx' target='_blank'>
              EQA Portal
          </Link>
      </div>
    </div>
  );
};
export default EqaDropDown;
