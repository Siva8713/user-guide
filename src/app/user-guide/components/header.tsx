// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css'; // You can create a CSS module to style the header

const Header = () => {
  return (
    <header className={styles.header}>
        <ul className={styles.navLinks}>
          <h1>Snack gpt User Guide</h1>
        </ul>
    </header>
  );
};

export default Header;
