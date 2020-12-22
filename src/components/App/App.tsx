import { Component } from 'react';
import { SearchBar } from '../SearchBar';
import './App.sass';

export class App extends Component {
  onSearchSubmit = (term: string) => {
    console.debug(term);
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
