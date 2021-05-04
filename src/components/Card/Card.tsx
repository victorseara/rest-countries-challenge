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
      className="flex transform focus:-translate-y-1 focus:shadow-2xl hover:-translate-y-1 hover:shadow-2xl flex-col dark:bg-common-blue rounded-md shadow-lg dark:text-white text-very-dark-blue cursor-pointer transition-all ease-in-out duration-300"
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
        <h3 className="font-bold text-lg mb-4">{country.name}</h3>
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
