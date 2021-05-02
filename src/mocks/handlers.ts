import { rest } from 'msw';
import { COUNTRIES_API_URL } from 'api/countries/countriesApi';
import { getAllCountries200 } from './responses';

export const handlers = [
  rest.get(`${COUNTRIES_API_URL}/all`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(getAllCountries200))
  ),
];
