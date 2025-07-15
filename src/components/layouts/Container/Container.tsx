import styles from '@/components/layouts/Container/Container.module.css';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const Container = ({ children, className = '', ...props }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
