import { useEffect, useState } from 'react';
import { Search } from 'react-feather';

type SearchBoxProps = {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
};

const SearchBox = ({ placeholder, value, onChange }: SearchBoxProps) => {
  const [localValue, setLocalValue] = useState(value || '');

  useEffect(() => {
    const debounce = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [localValue, onChange]);

  return (
    <div className="relative flex items-center text-gray-500 dark:text-gray-200 h-14 transition-all ease-in-out duration-700">
      <Search className="absolute my-auto mx-4" />
      <input
        className="text-base rounded-md shadow-md w-full h-full font-semibold input-light input-dark pl-16 focus:outline-none focus:ring-inset focus:ring-dark-hover focus:ring-1"
        type="text"
        aria-label="Search"
        onChange={e => setLocalValue(e.target.value)}
        value={localValue}
        placeholder={placeholder || 'Search ...'}
      />
    </div>
  );
};

export default SearchBox;
