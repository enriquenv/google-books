import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookGrid.module.css';

function BookGrid() {
  return (
    <div className={styles.grid}>
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}

export default BookGrid;