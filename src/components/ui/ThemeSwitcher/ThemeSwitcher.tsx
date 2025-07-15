import { useEffect, useState } from 'react';
import styles from '@/components/ui/ThemeSwitcher/ThemeSwitcher.module.css';
import { Moon, MoonFill } from '@/assets/icons';

type Theme = 'light' | 'dark';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'light'
  );
  const name = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  const icon = theme === 'dark' ? <MoonFill /> : <Moon />;

  const themeSwitch = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <button className={styles.button} onClick={themeSwitch}>
        {icon}
        <span className={styles.name}>{name}</span>
      </button>
    </>
  );
};

export default ThemeSwitcher;
