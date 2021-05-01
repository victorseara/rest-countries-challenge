export interface CountryGeneralInformation {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
}

interface CardProps {
  country: CountryGeneralInformation;
}

const Card = ({ country }: CardProps) => {
  return (
    <div className="flex flex-col dark:bg-common-blue rounded-md shadow-md dark:text-white text-very-dark-blue">
      <img
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className="object-cover w-full h-52 rounded-t-md"
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
