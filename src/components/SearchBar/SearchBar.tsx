import React, { Component } from 'react';
import './SearchBar.sass';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input type="text" placeholder="Search" />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
