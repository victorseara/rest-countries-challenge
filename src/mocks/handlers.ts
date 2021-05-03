import { rest } from 'msw';
import { COUNTRIES_API_URL } from 'api/countries/countriesApi';
import { getAllCountries200 } from './responses';

export const handlers = [
  rest.get(
    `${COUNTRIES_API_URL}/all`,
    (req, res, ctx) =>
      new Promise(resolve =>
        setTimeout(() => {
          resolve(res(ctx.status(200), ctx.json(getAllCountries200)));
        }, 3000)
      )
  ),
  rest.get(`${COUNTRIES_API_URL}/alpha/:code`, (req, res, ctx) => {
    const { code } = req.params;

    const country = getAllCountries200.find(item => item.alpha3Code === code);
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(res(ctx.status(200), ctx.json(country)));
      }, 3000)
    );
  }),
];
