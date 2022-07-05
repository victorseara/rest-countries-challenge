import { render, screen, waitFor } from '@testing-library/react';
import getAllCountries200 from 'mocks/responses/getAllCountries200.json';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import CountryDetails from './CountryDetails';

const country = getAllCountries200[0];
const asyncRender = async () => {
  render(
    <MemoryRouter initialEntries={[`/${country.alpha3Code}`]}>
      <CountryDetails />
    </MemoryRouter>
  );

  await screen.findByRole('heading', { name: country.name });
};

describe('CountryDetails test', () => {
  it('should navigate to a border country', async () => {
    await asyncRender();

    const borderCountryCode = country.borders[0];
    const borderCountry = getAllCountries200.find(
      item => item.alpha3Code === borderCountryCode
    );

    userEvent.click(screen.getByTitle(borderCountryCode));
    await waitFor(() =>
      expect(
        screen.getByRole('heading', { name: borderCountry?.name })
      ).toBeVisible()
    );

    userEvent.click(screen.getByRole('button', { name: /back/gi }));
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: country.name })).toBeVisible()
    );
  });
});
