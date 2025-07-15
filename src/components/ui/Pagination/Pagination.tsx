import { useSearchParams } from 'react-router-dom';
import styles from '@/components/ui/Pagination/Pagination.module.css';
import { getVisiblePages } from '@/utils/pagination';

type PaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  limit: number;
  total: number;
  className?: string;
};

const Pagination = ({ limit, total, className = '' }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastPage = Math.ceil(total / limit);
  const current = Number(searchParams.get('page')) || 1;
  const setPage = (page: number) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('page', String(page));
      return newParams;
    });
  };

  const pages = getVisiblePages(current, lastPage);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.pages}>
        <div
          style={{ display: current === 1 ? 'none' : 'block' }}
          onClick={() => setPage(current - 1)}
        >
          Previous
        </div>
        {pages.map(page => (
          <div
            onClick={() => setPage(page)}
            className={page === current ? styles.current : ''}
            key={page}
          >
            {[page]}
          </div>
        ))}
        <div
          style={{ display: current === lastPage ? 'none' : 'block' }}
          onClick={() => setPage(current + 1)}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
