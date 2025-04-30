import React, { useState } from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import BookGrid from './components/BookGrid/BookGrid';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    console.log('Search term query:', query);
    setSearchTerm(query);

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    fetch(apiUrl)
      .then(response => {
      if (response.ok) {
      return response.json();
      } else {
      throw new Error(`API response error: ${response.status}`);
      }
   })
      .then(data => {
        console.log('Whole response:', data);
        if (data.items) {
          console.log('Response.items:', data.items);
        } else {
          console.log('No books found.');
        }
      })
  };

  return (
    <div className="app">
      <Header />
      <SearchForm onSearch={handleSearch} />
      <BookGrid />
    </div>
  );
}

export default App;