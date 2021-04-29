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
    <div className="group w-full h-12 flex items-center text-gray-500 dark:text-gray-200 ">
      <Search className="absolute my-auto mx-4" />
      <input
        className="input-base input-focus input-light input-dark pl-16"
        type="text"
        aria-label="Search"
        placeholder="Search ..."
        {...props}
      />
    </div>
  );
};

export default SearchBox;
