import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ThirdPartyControlsDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center">
      <button
        className="hover:underline flex flex-row items-center justify-center capitalize"
        onClick={() => {
          toggle();
          navigate('/third-party-controls');
        }}
      >
        3rd Party Controls
        {isOpen ? (
          <AiOutlineCaretUp className="ml-1" />
        ) : (
          <AiOutlineCaretDown className="ml-1" />
        )}
      </button>
      <div
        className={`absolute top-10 bg-primaryBlue w-72 h-72 flex flex-col items-center gap-2 justify-center rounded shadow-lg z-[20] ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="/third-party-controls"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          3rd Party Controls
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/third-party-controls/haematology-controls"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Haematology Controls
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/third-party-controls/bacterial-control"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Bacterial Control
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/third-party-controls/clinical-chemistry-and-serology-controls"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Clinical Chemistry & Serology Controls
        </a>
        <hr className="w-3/4 my-2" />
        <a
          href="/third-party-controls/coagulation-controls"
          className="text-white text-center"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Coagulation Controls
        </a>
      </div>
    </div>
  );
};
export default ThirdPartyControlsDropDown;