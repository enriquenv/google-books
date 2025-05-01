import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookGrid.module.css';

function BookGrid({ books }) {
  return (
    <div className={styles.grid}>
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard key={book.id} book={book.volumeInfo} />
        ))
      ) : (
        <p>No books found. Try a different search!</p>
      )}
    </div>
  );
}

export default BookGrid;