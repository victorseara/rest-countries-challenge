/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@testing-library/react';
import MockIntersectionObserver from 'mocks/MockIntersectionObserver';
import countries from 'mocks/responses/getAllCountries200.json';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = MockIntersectionObserver;
  window.IntersectionObserverEntry = jest.fn();
});

it('should render an interactive app ', async () => {
  render(<App />);

  await waitFor(() => expect(screen.getByText(/finding/gi)).toBeVisible());
  await waitFor(() =>
    expect(screen.getAllByTestId('country-card')).toHaveLength(8)
  );

  const country = countries[0];
  userEvent.click(screen.getByRole('img', { name: `Flag of ${country.name}` }));
  await waitFor(() => expect(screen.getByText(/loading/gi)).toBeVisible());
  await waitFor(() =>
    expect(screen.getByRole('heading', { name: country.name })).toBeVisible()
  );

  userEvent.click(screen.getByRole('button', { name: country.borders[0] }));

  await waitFor(() =>
    expect(screen.getByRole('heading', { name: /iran/gi })).toBeVisible()
  );
});
