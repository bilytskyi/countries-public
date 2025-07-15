import Card from '@/components/ui/Card/Card';
import Container from '@/components/layouts/Container/Container';
import styles from '@/components/layouts/CardList/CardList.module.css';
import { Country } from '@/types/Country';

type CardsListProps = React.HTMLAttributes<HTMLDivElement> & {
  countries: Country[];
  className?: string;
};

const CardsList = ({ countries, className = '' }: CardsListProps) => {
  return (
    <Container className={`${styles.flex} ${className}`}>
      {countries.map(country => (
        <Card key={country.cca3} data={country} />
      ))}
    </Container>
  );
};

export default CardsList;
