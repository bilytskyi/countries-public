import styles from '@/components/layouts/SettingsRow/SettingsRow.module.css';
import Container from '@/components/layouts/Container/Container';
import Search from '@/components/ui/Search/Search';
import Filter from '@/components/ui/Filter/Filter';
import { regions } from '@/utils/constants';

type SettingsRowProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const SettingsRow = ({ className = '', ...props }: SettingsRowProps) => {
  return (
    <Container>
      <div className={`${styles.flex} ${className}`} {...props}>
        <Search />
        <Filter elements={regions} />
      </div>
    </Container>
  );
};

export default SettingsRow;
