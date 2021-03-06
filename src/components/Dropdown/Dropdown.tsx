import { ChevronDown } from 'react-feather';

type Options = string[];

interface DropdownProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Options;
}

const Dropdown = ({
  name,
  placeholder,
  onChange,
  options,
  value,
}: DropdownProps) => {
  return (
    <label
      htmlFor={name}
      className="relative flex items-center text-gray-500 dark:text-gray-200 rounded-md shadow-md h-14"
    >
      <ChevronDown className="absolute my-auto right-0 mx-4" />
      <select
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        className="w-full h-full dark:bg-common-blue px-8 bg-white rounded-md font-semibold focus:outline-none focus:ring-inset focus:ring-dark-hover focus:ring-1"
      >
        <option disabled hidden className="font-semibold" value="">
          {placeholder}
        </option>
        {options.map(item => (
          <option key={item} className="font-semibold">
            {item}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
