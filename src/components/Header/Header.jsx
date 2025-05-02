import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.titleLink}>
        <h1>Google Books Search</h1>
      </a>
    </header>
  );
}

export default Header;