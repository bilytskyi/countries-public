import styles from '@/components/layouts/Nav/Nav.module.css';
import Container from '@/components/layouts/Container/Container';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher';

type NavProps = React.HTMLAttributes<HTMLElement> & {
  className?: string;
};

const Nav = ({ className = '', ...props }: NavProps) => {
  return (
    <nav className={`${styles.nav} ${className}`} {...props}>
      <Container>
        <div className={styles.flex}>
          <h1 className={styles.title}>Where in the world?</h1>
          <ThemeSwitcher />
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
