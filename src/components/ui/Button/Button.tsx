import { ArrowLeft } from '@/assets/icons';
import styles from '@/components/ui/Button/Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  arrow?: boolean;
  children: React.ReactNode;
};

const Button = ({
  arrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {arrow ? (
        <>
          <ArrowLeft /> {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
