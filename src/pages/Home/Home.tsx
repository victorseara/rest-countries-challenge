import { useCallback, useState } from 'react';
import { CountryGeneralInformation } from '../../components/Card/Card';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchBox from '../../components/SearchBox/SearchBox';
import mock from '../../components/Card/mock.json';
import { GridList } from '../../components/GridList/GridList';

const countriesMock = mock as CountryGeneralInformation[];
const regionOptions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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

function Home() {
  const [query, setQuery] = useState('');
  const [filterByRegion, setFilterByRegion] = useState('');

  const countries =
    filterByRegion || query
      ? displayCountries(filterByRegion, query)
      : countriesMock;

  const updateQuery = useCallback((value: string) => setQuery(value), []);

  return (
    <div className="flex flex-col">
      <div
        id="home-fixed-content"
        className="flex flex-col h-52 sm:h-36 justify-center  w-full fixed left-0 bg-light-gray dark:bg-dark-blue items-center"
      >
        <div className="flex justify-between flex-wrap w-10/12 max-w-screen-2xl">
          <div className="w-full sm:w-1/3 " style={{ minWidth: '320px' }}>
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
      <div className="mt-52 sm:mt-36">
        <GridList countries={countries} />
      </div>
    </div>
  );
}

export default Home;
