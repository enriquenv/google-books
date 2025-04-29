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