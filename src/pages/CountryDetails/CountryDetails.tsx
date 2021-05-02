import { ChevronLeft } from 'react-feather';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

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

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Country {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Languages[];
}

interface Params {
  name: string;
}

const CountryDetails = ({
  history,
  location,
}: RouteComponentProps<Params, StaticContext, Country>) => {
  const { state } = location;
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
  } = state;

  const currencies = state.currencies.map(item => item.name);
  const languages = state.languages.map(item => item.name);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="py-12 my-4">
        <button
          className="bg-light-gray dark:bg-common-blue px-8 py-4 flex text-lg items-center font-semibold shadow-md rounded-md hover:border hover:border-dark-hover dark:hover:shadow-xl hover:scale-50 transition-all ease-in"
          type="button"
          onClick={() => history.goBack()}
        >
          <ChevronLeft />
          Countries
        </button>
      </div>
      <div className="flex flex-col xl:flex-row">
        <img
          src={flag}
          alt={`Flag of ${name}`}
          className="object-contain h-42 w-full xl:w-7/12 2xl:w-6/12  sm:w-full shadow-xl rounded-md"
        />
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
