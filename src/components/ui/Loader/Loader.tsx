import styles from '@/components/ui/Loader/Loader.module.css';

const sizeMap = {
  sm: styles.loaderSM,
  md: styles.loaderMD,
  lg: styles.loaderLG,
} as const;

type LoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof sizeMap;
  className?: string;
};

const Loader = ({ size = 'sm', className = '' }: LoaderProps) => {
  return <div className={`${sizeMap[size]} ${className}`}></div>;
};

export default Loader;
