import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import getAllCountries200 from "mocks/responses/getAllCountries200.json";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import CountryDetails from "./CountryDetails";
import { server } from "mocks/server";
import { rest } from "msw";
import { COUNTRIES_API_URL, SERVER_ERROR } from "api/countries/countriesApi";

const country = getAllCountries200[0];
const asyncRender = async () => {
  render(
    <MemoryRouter initialEntries={[`/${country.alpha3Code}`]}>
      <CountryDetails />
    </MemoryRouter>
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

    server.use(
      rest.get(`${COUNTRIES_API_URL}/alpha/:code`, (_, res, ctx) =>
        res(ctx.status(API_ERROR_STATUS))
      )
    );

    render(
      <MemoryRouter initialEntries={[`/${country.alpha3Code}`]}>
        <CountryDetails />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(
      screen.getByText("Loading informations...")
    );

    expect(screen.getByText(SERVER_ERROR)).toBeInTheDocument();
  });
});
