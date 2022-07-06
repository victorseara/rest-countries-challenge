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
import React from "react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

const countryCardSelector = "country-card";

const asyncRender = async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  await screen.findAllByTestId(countryCardSelector);
};

describe("Home page test", () => {
  it("should be possible to search for a country by name", async () => {
    await asyncRender();

    const countryName = "Brazil";
    userEvent.type(screen.getByRole("textbox"), countryName);
    await waitFor(() =>
      expect(screen.getAllByTestId(countryCardSelector)).toHaveLength(1)
    );
    expect(screen.getByRole("heading", { name: countryName })).toBeVisible();
  });

  it("should be possible to search a country by region", async () => {
    await asyncRender();

    const region = "Oceania";
    userEvent.selectOptions(screen.getByRole("combobox"), region);
    const filteredCountries = getAllCountries200.filter(
      (item) => item.region === region
    );
    expect(screen.getAllByTestId(countryCardSelector)).toHaveLength(
      filteredCountries.length
    );

    const countryFromAnotherRegion = "Brazil";
    userEvent.type(screen.getByRole("textbox"), countryFromAnotherRegion);
    await waitForElementToBeRemoved(() =>
      screen.queryAllByTestId(countryCardSelector)
    );
    expect(screen.getByText(/no country match/i)).toBeVisible();
    userEvent.clear(screen.getByRole("textbox"));

    await screen.findAllByTestId(countryCardSelector);

    const countryFromRegion = filteredCountries[0].name;
    userEvent.type(screen.getByRole("textbox"), countryFromRegion);

    await waitFor(() =>
      expect(screen.getAllByTestId(countryCardSelector)).toHaveLength(1)
    );

    expect(
      screen.getByRole("heading", { name: countryFromRegion })
    ).toBeVisible();
  });

  it("should navigate to country details", async () => {
    await asyncRender();

    const country = getAllCountries200[0];
    userEvent.click(screen.getByRole("heading", { name: country.name }));
    expect(screen.getByRole("heading", { name: country.name }));
  });

  it("should show an error message when fetch fails", async () => {
    const API_ERROR = 401;

    server.use(
      rest.get(`${COUNTRIES_API_URL}/all`, (_, res, ctx) =>
        res(ctx.status(API_ERROR))
      )
    );

    render(<Home />);

    await waitFor(() => expect(screen.getByRole("alert")).toBeVisible());
  });
});
