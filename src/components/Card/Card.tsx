import { Country } from 'api/countries/types/Country';
import { useHistory } from 'react-router-dom';
import Img from 'react-cool-img';

interface CardProps {
  country: Country;
}

const Card = ({ country }: CardProps) => {
  const history = useHistory();

  const navigateToCountry = () => history.push(`/${country.alpha3Code}`);

  return (
    <div
      className="flex transform focus:scale-105 focus:shadow-2xl hover:scale-105 hover:shadow-2xl flex-col dark:bg-common-blue rounded-md shadow-lg dark:text-white text-very-dark-blue cursor-pointer transition-transform duration-500 ease-in-out"
      role="button"
      tabIndex={0}
      onClick={navigateToCountry}
      onKeyDown={e => (e.key === 'Enter' ? navigateToCountry() : null)}
    >
      <Img
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className="object-cover w-full h-52 rounded-t-md "
      />
      <div className="py-8 px-6">
        <span className="font-bold text-lg mb-4">{country.name}</span>
        <ul>
          <li className="mb-2">
            <span className="font-semibold">Population: </span>{' '}
            {country.population.toLocaleString()}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Region: </span> {country.region}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Capital: </span> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
