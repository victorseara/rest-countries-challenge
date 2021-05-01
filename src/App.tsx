import { useEffect, useState } from 'react';
import Card, { CountryGeneralInformation } from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import mock from './components/Card/mock.json';

const countries = mock as CountryGeneralInformation[];

type UserTheme = 'light' | 'dark';

function App() {
  const [userTheme, setUserTheme] = useState<UserTheme>('light');

  localStorage.setItem('theme', 'dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme') as UserTheme;

    if (!theme) {
      localStorage.setItem('theme', 'light');
    }

    if (theme === 'dark') {
      setUserTheme('dark');
      document.querySelector('html')?.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (userTheme === 'dark') {
      setUserTheme('light');
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setUserTheme('dark');
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="h-full flex flex-col items-center overflow-x-hidden">
      <Header title="Where in the world ?" toggleTheme={toggleTheme} />
      <div className="h-full w-10/12 max-w-screen-2xl flex flex-col">
        <div className="flex flex-col sm:justify-between sm:flex-row">
          <div className="w-12/12 sm:w-1/2">
            <SearchBox placeholder="Search for a country..." />
          </div>
          <div className="mt-12 w-8/12 sm:mt-0 sm:w-2/12">
            <Dropdown />
          </div>
        </div>
        <main className="mt-12 flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-20">
          {countries.map(country => (
            <Card country={country} key={country.name} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
