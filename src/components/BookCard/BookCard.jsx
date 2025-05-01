import React from 'react';
import styles from './BookCard.module.css';

function BookCard({ book }) {
    //console.log('BookCard props:', book);
    const title = book?.title || 'Title unavailable';
    const authors = book?.authors?.length > 0 ? book.authors.join(', ') : 'Author unavailable';
    const imageUrl = book?.imageLinks?.thumbnail || './no-cover.jpg';
    const description = book?.description
    ? book.description.substring(0, 100) + '...'
    : 'No description available.';

  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={`Cover of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.authors}>By: {authors}</p>
      <summary className={styles.description}>{description}</summary>
    </article>
  );
}

export default BookCard;