import React from 'react';
import { SearchBar } from '../SearchBar';
import './App.sass';

export const App: React.FC = () => {
  return (
    <div className="app">
      <SearchBar />
    </div>
  );
};
