import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}
