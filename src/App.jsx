import React from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import BookGrid from './components/BookGrid/BookGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchForm />
      <BookGrid />
    </div>
  );
}

export default App;