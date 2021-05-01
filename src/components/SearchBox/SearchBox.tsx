import { Search } from 'react-feather';

type SearchBoxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'className' | 'type'
>;

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="relative w-full h-10 flex items-center text-gray-500 dark:text-gray-200">
      <Search className="absolute my-auto mx-4" />
      <input
        className="input-base input-light input-dark pl-16 focus:outline-none focus:ring-inset focus:ring-dark-hover focus:ring-1"
        type="text"
        aria-label="Search"
        placeholder="Search ..."
        {...props}
      />
    </div>
  );
};

export default SearchBox;
