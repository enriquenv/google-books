import React from 'react';
import styles from './SearchForm.module.css';

function SearchForm({ onSearch }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const query = formData.get('search');
    if (query) {
      onSearch(query);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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