import { findCountryByCode } from "api/countries/countriesApi";
import { Border, Country } from "api/countries/types/Country";
import { Loader } from "components/Loader/Loader";
import Img from "react-cool-img";
import { ChevronLeft } from "react-feather";
import { useQuery } from "react-query";
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

type CountryDetailInfo = Omit<Country, "borders"> & { borders: Border[] };

const fetchCountryInfo = async (
  countryCode: string
): Promise<CountryDetailInfo> => {
  try {
    const country = await findCountryByCode(countryCode);

    if (country.borders && country.borders.length > 0) {
      const promises = country.borders.map((item) =>
        findCountryByCode(item, "name;alpha3Code").then(
          (response) => response as Border
        )
      );
      const bordersResult = await Promise.all(promises);
      return {
        ...country,
        borders: bordersResult,
      };
    }

    return { ...country, borders: [] };
  } catch {
    throw new Error("Failed to fetch country.");
  }
};

const CountryDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const countryCode = location.pathname.replace("/", "");

  const { data, error, status } = useQuery<CountryDetailInfo, Error>(
    ["country", countryCode],
    () => fetchCountryInfo(countryCode),
    { staleTime: Infinity }
  );

  if (status === "error") {
    return <div>{error.message}</div>;
  }

  if (status === "loading") {
    return (
      <div className="mt-8">
        <Loader message="Loading informations..." />
      </div>
    );
  }

  const currencies = data?.currencies.map((item) => item.name) || [];
  const languages = data?.languages.map((item) => item.name) || [];

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
            src={data?.flag}
            alt={`Flag of ${data?.name}`}
            className="h-auto w-full shadow-xl rounded-md object-contain"
          />
        </div>
        <div>
          <section className="flex flex-col xl:ml-24 py-12">
            <h2 className="text-3xl font-bold">{data?.name}</h2>
            <div className="flex text-lg flex-col lg:flex-row xl:flex-row">
              <ul className="flex-1 py-4 mr-8">
                <InformationItem label="Native name">
                  {data?.nativeName}
                </InformationItem>
                <InformationItem label="Population">
                  {data?.population}
                </InformationItem>
                <InformationItem label="Region">{data?.region}</InformationItem>
                <InformationItem label="Sub Region">
                  {data?.subregion}
                </InformationItem>
                <InformationItem label="Capital">
                  {data?.capital}
                </InformationItem>
              </ul>
              <ul className="flex-1 py-8">
                <InformationItem label="Top Level Domain">
                  {data?.topLevelDomain.toString()}
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
          {data?.borders && data.borders.length > 0 ? (
            <section className="flex flex-col xl:ml-24 py-1 xl:items-start xl:flex-row max-w-2xl">
              <span className="flex-shrink-0 font-semibold mr-4 mb-4 mt-1 xl:mb-0">
                Border Countries:
              </span>
              <ul className="flex flex-wrap">
                {data?.borders.map((item) => (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
