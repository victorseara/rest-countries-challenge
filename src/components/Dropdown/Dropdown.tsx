import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      <div className="group w-full h-12 flex items-center text-gray-500 dark:text-gray-200">
        <button
          className="input-base input-focus input-light input-dark flex items-center justify-between px-4"
          type="button"
          onClick={() => setIsOpen(prevstate => !prevstate)}
        >
          <span>{value || 'Filter by Region'}</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <div style={{ display: !isOpen ? 'none' : 'unset' }}>
        <ul className="dark:bg-common-blue dark:text-white shadow-md mt-4 rounded-md cursor-pointer">
          <li className="py-2 px-4 hover:bg-very-dark-blue focus:bg-very-dark-blue">
            <button
              className="w-full flex"
              onClick={() => {
                setValue('Africa');
                setIsOpen(false);
              }}
              type="button"
            >
              Africa
            </button>
          </li>
          <li className="py-2 px-4 hover:bg-very-dark-blue focus:bg-very-dark-blue">
            <button
              className="w-full flex"
              onClick={() => {
                setValue('America');
                setIsOpen(false);
              }}
              type="button"
            >
              America
            </button>
          </li>
          <li className="py-2 px-4 hover:bg-very-dark-blue focus:bg-very-dark-blue">
            <button
              className="w-full flex"
              onClick={() => {
                setValue('Asia');
                setIsOpen(false);
              }}
              type="button"
            >
              Asia
            </button>
          </li>
          <li className="py-2 px-4 hover:bg-very-dark-blue focus:bg-very-dark-blue">
            <button
              className="w-full flex"
              onClick={() => {
                setValue('Europe');
                setIsOpen(false);
              }}
              type="button"
            >
              Europe
            </button>
          </li>
          <li className="py-2 px-4 hover:bg-very-dark-blue focus:bg-very-dark-blue">
            <button
              className="w-full flex"
              onClick={() => {
                setValue('Oceania');
                setIsOpen(false);
              }}
              type="button"
            >
              Oceania
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
