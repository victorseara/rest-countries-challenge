import { useCallback, useEffect, useState } from "react";
import { Country } from "api/countries/types/Country";
import { getAllCountries } from "api/countries/countriesApi";
import { Loader } from "components/Loader/Loader";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBox from "../../components/SearchBox/SearchBox";
import { GridList } from "../../components/GridList/GridList";
import { useQuery } from "react-query";

const regionOptions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Home() {
  const { data, status, error } = useQuery<Country[], Error>(
    "countries",
    getAllCountries,
    { staleTime: Infinity }
  );

  const [query, setQuery] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  const updateQuery = useCallback((value: string) => setQuery(value), []);

  return (
    <div className="flex flex-col">
      <div className="flex z-50 flex-col h-52 sm:h-36 fixed justify-center  w-full left-0 bg-light-gray dark:bg-dark-blue items-center">
        <div className="flex justify-between flex-wrap w-10/12 max-w-screen-2xl">
          <div className="w-full sm:w-1/3 " style={{ minWidth: "320px" }}>
            <SearchBox
              placeholder="Search for a country..."
              value={query}
              onChange={updateQuery}
            />
          </div>
          <div
            className="w-6/12 sm:w-2/12 mt-10 sm:mt-0"
            style={{ minWidth: "200px" }}
          >
            <Dropdown
              name="query-by-name"
              options={regionOptions}
              placeholder="Filter by Region"
              value={filterByRegion}
              onChange={(e) => setFilterByRegion(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-52 sm:mt-36">
        {status !== "success" ? (
          <div>
            {error && <div role="alert">{error.message}</div>}
            {status === "loading" && <Loader message="Finding countries..." />}
          </div>
        ) : (
          <GridList countries={data} />
        )}
      </div>
    </div>
  );
}

export default Home;
