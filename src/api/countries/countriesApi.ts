import axios from 'axios';
import { Country } from './types/Country';

export const COUNTRIES_API_URL = 'https://restcountries.com/v2';

const client = axios.create({ baseURL: COUNTRIES_API_URL });

export const getAllCountries = async () => {
  const params = { fields: 'flag;name;population;region;capital;alpha3Code' };
  return client
    .get<Country[]>(`${COUNTRIES_API_URL}/all`, {
      params,
    })
    .then(response => response.data)
    .catch(() => {
      throw new Error(
        `Sorry, we cannot fetch countries at this moment. Please try again later.`
      );
    });
};

export const findCountryByCode = async (
  countryCode: string,
  params?: string
) => {
  return client
    .get<Country>(`${COUNTRIES_API_URL}/alpha/${countryCode}`, { params })
    .then(response => response.data)
    .catch(error => {
      if (error.isAxiosError && error.status === 404) {
        throw new Error(`Sorry, there is no country with name: ${countryCode}`);
      }

      throw new Error(
        'Sorry, we failed to respond to your request. Please try again later'
      );
    });
};
