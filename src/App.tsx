import { useCallback, useEffect, useState } from 'react';
import Card, { CountryGeneralInformation } from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import mock from './components/Card/mock.json';

const countriesMock = mock as CountryGeneralInformation[];
const regionOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

type UserTheme = 'light' | 'dark';

const displayCountries = (filterByRegion?: string, query?: string) => {
  if (!filterByRegion && !query) {
    return countriesMock;
  }

  const result = countriesMock.filter(item => {
    if (filterByRegion && item.region === filterByRegion) {
      if (!query) {
        return true;
      }
      return item.name.toLowerCase().includes(query.toLowerCase());
    }

    if (query && !filterByRegion) {
      return item.name.toLowerCase().includes(query.toLowerCase());
    }

    return false;
  });

  return result;
};

function App() {
  const [userTheme, setUserTheme] = useState<UserTheme>('light');
  const [query, setQuery] = useState('');
  const [filterByRegion, setFilterByRegion] = useState('');

  const countries =
    filterByRegion || query
      ? displayCountries(filterByRegion, query)
      : countriesMock;

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

  useEffect(() => {
    const fixedContent = document.getElementById('fixed-content');
    const fixedContentHeight = (fixedContent && fixedContent.offsetHeight) || 0;

    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.marginTop = `${fixedContentHeight}px`;
    }
  }, []);

  const updateQuery = useCallback((value: string) => setQuery(value), []);

  return (
    <div
      className="h-full flex flex-col items-center"
      style={{ overflowX: 'clip' }}
    >
      <div
        className="w-full flex flex-col fixed dark:bg-dark-blue bg-light-gray"
        id="fixed-content"
      >
        <Header title="Where in the world ?" toggleTheme={toggleTheme} />
        <div className="h-full w-10/12 max-w-screen-2xl flex flex-col my-14 self-center">
          <div className="flex justify-between flex-wrap">
            <div className="w-12/12 sm:w-1/3 " style={{ minWidth: '320px' }}>
              <SearchBox
                placeholder="Search for a country..."
                value={query}
                onChange={updateQuery}
              />
            </div>
            <div
              className="w-6/12 sm:w-2/12 mt-10 sm:mt-0"
              style={{ minWidth: '200px' }}
            >
              <Dropdown
                options={regionOptions}
                placeholder="Filter by Region"
                value={filterByRegion}
                onChange={e => setFilterByRegion(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 max-w-screen-2xl flex flex-col">
        <main
          id="main-content"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-20 grid-rows-1"
        >
          {countries.map(country => (
            <Card country={country} key={country.name} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
