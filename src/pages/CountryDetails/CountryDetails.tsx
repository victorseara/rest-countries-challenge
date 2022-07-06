import { findCountryByCode } from "api/countries/countriesApi";
import { Border, Country } from "api/countries/types/Country";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import Img from "react-cool-img";
import { ChevronLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router";

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

type CountryDetailInfo = Omit<Country, "borders"> & { borders?: Border[] };

const CountryDetails = () => {
  const [country, setCountry] = useState<CountryDetailInfo>();
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetch = async (countryName: string) =>
      findCountryByCode(countryName)
        .then(async (data) => {
          if (data.borders && data.borders.length > 0) {
            const promises = data.borders.map((item) =>
              findCountryByCode(item, "name;alpha3Code").then(
                (response) => response as Border
              )
            );
            const bordersResult = await Promise.all(promises);

            return setCountry({ ...data, borders: bordersResult });
          }
          return setCountry({ ...data, borders: undefined });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });

    if (location.pathname) {
      fetch(location.pathname.replace("/", ""));
    }
  }, [location.pathname]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!country) {
    return (
      <div className="mt-8">
        <Loader message="Loading informations..." />
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
    borders,
  } = country;

  const currencies = country.currencies.map((item) => item.name);
  const languages = country.languages.map((item) => item.name);

  return (
    <div className="h-full w-full flex flex-col transition-all duration-500 ease-linear">
      <div className="py-12 my-4">
        <button
          className="bg-white dark:bg-common-blue px-8 py-4 flex text-lg items-center font-semibold shadow-md rounded-md hover:border hover:border-dark-hover dark:hover:shadow-xl"
          type="button"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
          Go back
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
        <div>
          <section className="flex flex-col xl:ml-24 py-12">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="flex text-lg flex-col lg:flex-row xl:flex-row">
              <ul className="flex-1 py-4 mr-8">
                <InformationItem label="Native name">
                  {nativeName}
                </InformationItem>
                <InformationItem label="Population">
                  {population}
                </InformationItem>
                <InformationItem label="Region">{region}</InformationItem>
                <InformationItem label="Sub Region">
                  {subregion}
                </InformationItem>
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
          <section className="flex flex-col xl:ml-24 py-1 xl:items-start xl:flex-row max-w-2xl">
            <span className="flex-shrink-0 font-semibold mr-4 mb-4 mt-1 xl:mb-0">
              Border Countries:
            </span>
            <ul className="flex flex-wrap">
              {borders &&
                borders.map((item) => (
                  <li key={item.alpha3Code}>
                    <button
                      type="button"
                      title={item.alpha3Code}
                      onClick={() => navigate(`/${item.alpha3Code}`)}
                      className="bg-white shadow-md rounded-md flex mr-1 py-1 px-4 items-center justify-center mb-4 dark:bg-common-blue font-semibold hover:border hover:border-dark-hover dark:hover:shadow-xl hover:scale-50"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
