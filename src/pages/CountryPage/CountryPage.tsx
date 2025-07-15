import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { countriesNames } from '@/utils/constants';
import styles from '@/pages/CountryPage/CountryPage.module.css';
import LoadingLayout from '@/components/layouts/LoadingLayot/LoadingLayot';
import Loader from '@/components/ui/Loader/Loader';
import Container from '@/components/layouts/Container/Container';
import Button from '@/components/ui/Button/Button';
import { fetchCountryByName } from '@/api/countries';
import { getBorderNames } from '@/utils/string';
import { ErrorPNG, LoadingPNG } from '@/assets/icons';

const CountryPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const params = useParams();
  const countryName = params['*'] || '';
  const navigate = useNavigate();

  const { data, isPending, error } = useQuery({
    queryKey: ['country', countryName],
    queryFn: () => fetchCountryByName(countryName),
    enabled: !!countryName,
  });

  if (isPending)
    return (
      <>
        <title>Loading..</title>
        <link rel="icon" type="image/svg+xml" href={LoadingPNG} />
        <LoadingLayout />
      </>
    );
  if (error || !data)
    return (
      <div className={styles.noFound}>
        <title>Opps.. No data found..</title>
        <link rel="icon" type="image/svg+xml" href={ErrorPNG} />
        No data found..
        <Button onClick={() => navigate('/')} arrow={true}>
          Back
        </Button>
      </div>
    );

  const name = data.name.common;
  const officialName = data.name.official;
  const population = data.population.toLocaleString();
  const region = data.region;
  const subregion = data.subregion;
  const capital = Object.values(data.capital).join(', ');
  const languages = Object.values(data.languages).join(', ');
  const currencies = data.currencies
    ? Object.values(data.currencies)
        .map(c => c.name)
        .join(', ')
    : 'No currencies';
  const tld = data.tld[0];
  const borders = getBorderNames(data.borders, countriesNames);
  const flag = data.flags.svg;
  const alt = data.flags.alt;

  const countryInfo = [
    [officialName, 'Long name: '],
    [population, 'Population: '],
    [capital, 'Capital: '],
    [region, 'Region: '],
    [subregion, 'Sub Region: '],
    [currencies, 'Currencies: '],
    [tld, 'Top Level Domain: '],
    [languages, 'Languages: '],
  ];

  return (
    <Container className={styles.container}>
      <title>{name}</title>
      <link rel="icon" type="image/svg+xml" href={flag} />
      <div className={styles.buttonWrapper}>
        <Button onClick={() => navigate('/')} arrow={true}>
          Back
        </Button>
      </div>
      <div className={styles.content}>
        <div>
          {!isImageLoaded && <Loader />}
          <img
            className={styles.img}
            alt={alt}
            src={flag}
            onLoad={() => setIsImageLoaded(true)}
            style={{
              display: isImageLoaded ? 'block' : 'none',
            }}
          ></img>
        </div>
        <div>
          <div className={styles.title}>{name}</div>
          <div className={styles.info}>
            {countryInfo.map((el, index) => (
              <div key={index}>
                <span className={styles.subTitle}>{el[1]}</span>
                <span>{el[0]}</span>
              </div>
            ))}
          </div>

          <div className={styles.subTitle}>Border Countries:</div>
          <div className={styles.borders}>
            {borders && borders.length > 0 ? (
              borders.map(borderCountry => (
                <Button
                  key={borderCountry}
                  onClick={() => navigate(`/${borderCountry}`)}
                >
                  {borderCountry}
                </Button>
              ))
            ) : (
              <span>No borders :(</span>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountryPage;
