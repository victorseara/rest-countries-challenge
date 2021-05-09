/* eslint-disable import/no-extraneous-dependencies */
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import getAllCountries200 from 'mocks/responses/getAllCountries200.json';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import Home from './Home';

const asyncRender = async (Component: React.ReactElement) => {
  render(Component);

  await screen.findAllByTestId('country-card');
};

describe('Home page test', () => {
  it('should be possible to search for a country by name', async () => {
    await asyncRender(<Home />);

    const countryName = 'Brazil';
    userEvent.type(screen.getByRole('textbox'), countryName);
    await waitFor(() =>
      expect(screen.getAllByTestId('country-card')).toHaveLength(1)
    );
    expect(screen.getByRole('heading', { name: countryName })).toBeVisible();
  });

  it('should be possible to search a country by region', async () => {
    await asyncRender(<Home />);

    const region = 'Oceania';
    userEvent.selectOptions(screen.getByRole('combobox'), region);
    const filteredCountries = getAllCountries200.filter(
      item => item.region === region
    );
    expect(screen.getAllByTestId('country-card')).toHaveLength(
      filteredCountries.length
    );

    const countryFromAnotherRegion = 'Brazil';
    userEvent.type(screen.getByRole('textbox'), countryFromAnotherRegion);
    await waitForElementToBeRemoved(() =>
      screen.queryAllByTestId('country-card')
    );
    expect(screen.getByText(/no country match/gi)).toBeVisible();
    userEvent.clear(screen.getByRole('textbox'));

    await screen.findAllByTestId('country-card');

    const countryFromRegion = filteredCountries[0].name;
    userEvent.type(screen.getByRole('textbox'), countryFromRegion);

    await waitFor(() =>
      expect(screen.getAllByTestId('country-card')).toHaveLength(1)
    );

    expect(
      screen.getByRole('heading', { name: countryFromRegion })
    ).toBeVisible();
  });

  it('should navigate to country details', async () => {
    const history = createMemoryHistory();

    await asyncRender(
      <Router history={history}>
        <Home />
      </Router>
    );

    const country = getAllCountries200[0];

    userEvent.click(screen.getByRole('heading', { name: country.name }));

    expect(history.location.pathname).toEqual(`/${country.alpha3Code}`);
  });
});
