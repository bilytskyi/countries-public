import { Country } from '@/types/Country';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { truncate } from '@/utils/string';
import Loader from '../Loader/Loader';
import { useState } from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  data: Country;
  className?: string;
};

const Card = ({ data, className = '' }: CardProps) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div
      onClick={() => navigate(`/${data.name.common}`)}
      className={`${styles.card} ${className}`}
    >
      <div className={styles.imgWrapper}>
        {!isImageLoaded && <Loader />}
        <img
          className={styles.img}
          alt={data.flags.alt}
          src={data.flags.png}
          onLoad={() => setIsImageLoaded(true)}
          style={{
            display: isImageLoaded ? 'block' : 'none',
          }}
        ></img>
      </div>
      <div className={styles.content}>
        {/* Truncate long country names to avoid UI break */}
        <h3>{truncate(data.name.common, 30)}</h3>
        <div>
          Population:{' '}
          <span className={styles.data}>
            {data.population.toLocaleString()}
          </span>
        </div>
        <div>
          Region: <span className={styles.data}>{data.region}</span>
        </div>
        <div>
          Capital:{' '}
          <span className={styles.data}>{data.capital?.[0] ?? '—'}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
