import styles from '@/pages/MainPage/MainPage.module.css';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import LoadingLayout from '@/components/layouts/LoadingLayot/LoadingLayot';
import CardsList from '@/components/layouts/CardList/CardList';
import SettingsRow from '@/components/layouts/SettingsRow/SettingsRow';
import Pagination from '@/components/ui/Pagination/Pagination';
import { fetchAllCountries } from '@/api/countries';
import { IconPNG } from '@/assets/icons';

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region') || '';
  const search = searchParams.get('search') || '';
  const page = Number(searchParams.get('page')) || 1;

  const { data, isPending, error } = useQuery({
    queryKey: ['countries', region, search, page],
    queryFn: () => fetchAllCountries(region, search, page),
  });

  if (isPending) return <LoadingLayout />;
  if (error || !data || data.countries.length === 0)
    return (
      <>
        <title>Opps.. No data found</title>
        <SettingsRow />
        <div className={styles['no-data-found']}>No data found</div>
      </>
    );

  return (
    <div>
      <title>Where in the world?</title>
      <link rel="icon" type="image/svg+xml" href={IconPNG} />
      <SettingsRow />
      <CardsList countries={data.countries} />
      <Pagination limit={20} total={data.total} />
    </div>
  );
};

export default MainPage;
