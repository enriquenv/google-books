import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookGrid.module.css';

function BookGrid({ books }) {

    if (books === null) {
        return (
          <div className={styles.grid}>
            <p className={styles.noBooksMessage}>Ready, set, search! Browse Google's vast collection of books now.</p>
          </div>
        );
      }

    return (
        <div className={styles.grid}>
        {books.length > 0 ? (
            books.map((book) => (
            <BookCard key={book.id} book={book.volumeInfo} />
            ))
        ) : (
            <p className={styles.noBooksMessage}>No books found. Try a different search!</p>
        )}
        </div>
    );
}

export default BookGrid;