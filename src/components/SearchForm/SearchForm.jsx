import React from 'react';
import styles from './SearchForm.module.css';

function SearchForm() {
  return (
    <form className={styles.form}>
      <input
        type="text"
        name="search"
        placeholder="Search for books..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;