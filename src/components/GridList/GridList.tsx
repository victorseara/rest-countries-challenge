import Card, { CountryGeneralInformation } from '../Card/Card';

interface GridListProps {
  countries: CountryGeneralInformation[];
}

const EmptyState = () => (
  <div className="h-full justify-center items-center flex text-very-dark-blue dark:text-white">
    <h1>Nothing to show!</h1>
  </div>
);

export const GridList = ({ countries }: GridListProps) => {
  if (countries.length === 0) {
    return <EmptyState />;
  }
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16"
      style={{ overflowX: 'clip' }}
    >
      {countries.map(country => (
        <Card country={country} key={country.name} />
      ))}
    </div>
  );
};
