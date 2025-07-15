import Button from '@/components/ui/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from '@/assets/icons';
import styles from '@/components/ui/Filter/Filter.module.css';
import { useSearchParams } from 'react-router-dom';

type FilterElement = {
  id: number;
  name: string;
  value: string;
};

type FilterProps = React.HTMLAttributes<HTMLDivElement> & {
  elements: FilterElement[];
  className?: string;
};

const Filter = ({ elements, className = '' }: FilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const region: string = searchParams.get('region') || '';
  const updateRegion = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (!value) {
      newParams.delete('region');
    } else {
      newParams.set('region', value);
      newParams.delete('page');
    }
    setSearchParams(newParams);
  };

  const [isOpen, setIsOpen] = useState(false);
  const FilterRef = useRef<HTMLDivElement>(null);

  const closeFilter = (event: MouseEvent) => {
    if (
      FilterRef.current &&
      !FilterRef.current.contains(event.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', closeFilter);
    return () => document.removeEventListener('click', closeFilter);
  }, []);

  return (
    <div ref={FilterRef} className={`${styles.filter} ${className}`}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {region ? region : 'All Regions'}
        <ChevronDown
          className={isOpen ? styles.chevronUp : styles.chevronDown}
          size={10}
        />
      </Button>

      {isOpen && (
        <div className={styles.content}>
          {elements.map(element => (
            <div
              onClick={() => {
                updateRegion(element.value);
              }}
              key={element.id}
              data-value={element.value}
            >
              {element.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
