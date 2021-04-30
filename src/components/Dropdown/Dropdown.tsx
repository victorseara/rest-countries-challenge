import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      <div className="group w-full h-12 flex items-center text-gray-500 dark:text-gray-200">
        <button
          id="dropdown-button"
          className="input-base input-light input-dark flex items-center justify-between px-4 focus:active"
          type="button"
          onBlur={() => {
            document.getElementById('option-list')?.classList.remove('active');
            setIsOpen(false);
          }}
          onClick={() => {
            document.getElementById('option-list')?.classList.add('active');
            setIsOpen(prev => !prev);
          }}
        >
          <span>{value || 'Filter by Region'}</span>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <div style={{ display: !isOpen ? 'none' : 'unset' }}>
        <div
          id="option-list"
          role="menu"
          className="dark:bg-common-blue dark:text-white shadow-md rounded-md cursor-pointer mt-6"
        >
          <div
            role="menuitem"
            id="first-option"
            tabIndex={0}
            onKeyDown={() => {
              setValue('Africa');
              setIsOpen(false);
            }}
            onClick={() => {
              setValue('Africa');
              setIsOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-hover"
          >
            Africa
          </div>
          <div
            role="menuitem"
            id="first-option"
            tabIndex={0}
            onKeyDown={() => {
              setValue('America');
              setIsOpen(false);
            }}
            onClick={() => {
              setValue('America');
              setIsOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-hover"
          >
            America
          </div>
          <div
            role="menuitem"
            id="first-option"
            tabIndex={0}
            onKeyDown={() => {
              setValue('Asia');
              setIsOpen(false);
            }}
            onClick={() => {
              setValue('Asia');
              setIsOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-hover"
          >
            Asia
          </div>
          <div
            role="menuitem"
            id="first-option"
            tabIndex={0}
            onKeyDown={() => {
              setValue('Europe');
              setIsOpen(false);
            }}
            onClick={() => {
              setValue('Europe');
              setIsOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-hover "
          >
            Europe
          </div>
          <div
            role="menuitem"
            id="first-option"
            tabIndex={0}
            onKeyDown={() => {
              setValue('Oceania');
              setIsOpen(false);
            }}
            onClick={() => {
              setValue('Oceania');
              setIsOpen(false);
            }}
            className="py-2 px-4 hover:bg-gray-200 dark:hover:bg-dark-hover "
          >
            Oceania
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
