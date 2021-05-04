import { findCountryByName } from 'api/countries/countriesApi';
import { Country } from 'api/countries/types/Country';
import { useEffect, useState } from 'react';
import { ChevronLeft, Loader } from 'react-feather';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import Img from 'react-cool-img';

interface InformationItemProps {
  label: string;
  children: React.ReactNode;
}
const InformationItem = ({ label, children }: InformationItemProps) => (
  <li className="py-1">
    <span className="font-semibold">{label}: </span>
    {children}
  </li>
);

interface Params {
  name: string;
}

const CountryDetails = ({
  history,
  location,
}: RouteComponentProps<Params, StaticContext, Country>) => {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const fetch = async (countryName: string) =>
      findCountryByName(countryName).then(data => setCountry(data));
    if (location.pathname) {
      fetch(location.pathname.replace('/', ''));
    }
  }, [location.pathname]);

  if (!country) {
    return (
      <div className="flex py-12 my-4">
        <Loader className="animate-spin mr-2" />{' '}
        <span className="animate-pulse font-semibold">Loading...</span>
      </div>
    );
  }

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
  } = country;

  const currencies = country.currencies.map(item => item.name);
  const languages = country.languages.map(item => item.name);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="py-12 my-4">
        <button
          className="bg-light-gray dark:bg-common-blue px-8 py-4 flex text-lg items-center font-semibold shadow-md rounded-md hover:border hover:border-dark-hover dark:hover:shadow-xl hover:scale-50"
          type="button"
          onClick={() => history.goBack()}
        >
          <ChevronLeft />
          Countries
        </button>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="rounded-md max-w-2xl">
          <Img
            src={flag}
            alt={`Flag of ${name}`}
            className="h-auto w-full shadow-xl rounded-md object-contain"
          />
        </div>
        <section className="flex flex-col flex-1 xl:ml-24 py-12">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div className="flex text-lg flex-col lg:flex-row xl:flex-row">
            <ul className="flex-1 py-4 mr-8">
              <InformationItem label="Native name">
                {nativeName}
              </InformationItem>
              <InformationItem label="Population">{population}</InformationItem>
              <InformationItem label="Region">{region}</InformationItem>
              <InformationItem label="Sub Region">{subregion}</InformationItem>
              <InformationItem label="Capital">{capital}</InformationItem>
            </ul>
            <ul className="flex-1 py-8">
              <InformationItem label="Top Level Domain">
                {topLevelDomain.toString()}
              </InformationItem>
              <InformationItem label="Currencies">
                {currencies.toString()}
              </InformationItem>
              <InformationItem label="Languages">
                {languages.toString()}
              </InformationItem>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CountryDetails;
