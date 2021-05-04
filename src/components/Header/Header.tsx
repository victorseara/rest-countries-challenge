import { Moon } from 'react-feather';

interface HeaderProps {
  title: string;
  toggleTheme: () => void;
}

const Header = ({ title, toggleTheme }: HeaderProps) => {
  return (
    <div
      id="main-header"
      className="w-full fixed z-50 bg-white dark:bg-common-blue h-20 shadow-md flex justify-center text-dark-blue dark:text-white"
    >
      <div className="w-10/12 max-w-screen-2xl flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-3xl">{title}</h1>
        <button
          type="button"
          className="flex cursor-pointer hover:opacity-80"
          onClick={toggleTheme}
        >
          <Moon fill="#fff" />
          <span className="ml-2 font-semibold hidden sm:inline">Dark mode</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
