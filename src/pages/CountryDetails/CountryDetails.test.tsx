import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { COUNTRIES_API_URL } from "api/countries/countriesApi";
import getAllCountries200 from "mocks/responses/getAllCountries200.json";
import { server } from "mocks/server";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router";
import CountryDetails from "./CountryDetails";

const country = getAllCountries200[0];
const asyncRender = async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[`/${country.alpha3Code}`]}>
        <CountryDetails />
      </MemoryRouter>
    </QueryClientProvider>
  );

  await screen.findByRole("heading", { name: country.name });
};

describe("CountryDetails test", () => {
  it("should navigate to a border country", async () => {
    await asyncRender();

    const borderCountryCode = country.borders[0];
    const borderCountry = getAllCountries200.find(
      (item) => item.alpha3Code === borderCountryCode
    );

    userEvent.click(screen.getByTitle(borderCountryCode));
    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: borderCountry?.name })
      ).toBeVisible()
    );

    userEvent.click(screen.getByRole("button", { name: /back/i }));
    await waitFor(() =>
      expect(screen.getByRole("heading", { name: country.name })).toBeVisible()
    );
  });

  it("should show an error message if API fails to respond", async () => {
    const API_ERROR_STATUS = 500;
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

    server.use(
      rest.get(`${COUNTRIES_API_URL}/alpha/:code`, (_, res, ctx) =>
        res(ctx.status(API_ERROR_STATUS))
      )
    );

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[`/${country.alpha3Code}`]}>
          <CountryDetails />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitForElementToBeRemoved(
      screen.getByText("Loading informations...")
    );

    expect(screen.getByText("Failed to fetch country.")).toBeInTheDocument();
  });
});
