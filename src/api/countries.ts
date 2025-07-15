import { Country } from '@/types/Country';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async (
  region: string,
  search: string,
  page: number
): Promise<{ countries: Country[]; total: number }> => {
  const limit = 20;
  const response = await fetch(
    `${BASE_URL}/all?fields=name,capital,region,borders,population,flags,cca3`
  );
  let data: Country[] = await response.json();

  data = data
    .filter(c => !region || c.region === region)
    .filter(c =>
      !search
        ? true
        : c.name.common.toLowerCase().includes(search.toLowerCase())
    );

  const chunk = data.slice(page * limit - limit, page * limit);

  return {
    countries: chunk,
    total: data.length,
  };
};

export const fetchCountryByName = async (
  name: string
): Promise<Country | null> => {
  const res = await fetch(
    `${BASE_URL}/name/${name}/?fields=name,capital,region,subregion,tld,currencies,languages,borders,population,flags,cca3`
  );
  const data = await res.json();
  return data[0] || null;
};
