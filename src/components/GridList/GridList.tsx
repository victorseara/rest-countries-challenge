import { Country } from 'api/countries/types/Country';
import Card from '../Card/Card';

interface GridListProps {
  countries: Country[];
}

const EmptyState = () => (
  <div className="flex text-very-dark-blue dark:text-white">
    <span className="font-semibold">No country match your query.</span>
  </div>
);

export const GridList = ({ countries }: GridListProps) => {
  if (countries.length === 0) {
    return <EmptyState />;
  }
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-4 px-1"
      style={{ overflowX: 'clip' }}
    >
      {countries.map(country => (
        <Card country={country} key={country.name} />
      ))}
    </div>
  );
};
