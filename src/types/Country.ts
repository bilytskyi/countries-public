export type Country = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  languages: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol?: string;
    };
  };
  tld: string[];
  borders: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  cca3: string;
};
