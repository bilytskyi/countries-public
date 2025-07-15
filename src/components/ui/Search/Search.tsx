import { useState, useEffect } from 'react';
import { SearchIcon } from '@/assets/icons';
import styles from '@/components/ui/Search/Search.module.css';
import { useSearchParams } from 'react-router-dom';

type SearchProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const Search = ({ className = '', ...props }: SearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const handler = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams);
      if (!search.trim()) {
        newParams.delete('search');
      } else {
        newParams.set('search', search.trim());
        newParams.delete('page');
      }
      setSearchParams(newParams, { replace: true });
    }, 800);

    return () => clearTimeout(handler);
  }, [search, setSearchParams, searchParams]);

  return (
    <div {...props} className={`${styles.inputWrapper} ${className}`}>
      <SearchIcon className={styles.icon} />
      <input
        type="text"
        placeholder="Search for a country..."
        className={styles.input}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
