import styles from '@/components/layouts/LoadingLayot/LoadingLayot.module.css';
import Loader from '@/components/ui/Loader/Loader';

type LoadingLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const LoadingLayout = ({
  className = '',
  size = 'sm',
  ...props
}: LoadingLayoutProps) => {
  return (
    <div className={`${styles.loading} ${className}`} {...props}>
      <Loader size={size} />
    </div>
  );
};

export default LoadingLayout;
