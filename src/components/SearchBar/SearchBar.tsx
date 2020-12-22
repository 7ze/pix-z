import React, { Component, ChangeEvent } from 'react';
import './SearchBar.sass';

export class SearchBar extends Component {
  state = {
    userInput: '',
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state.userInput);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input
              type="text"
              placeholder="Search"
              onChange={this.onInputChange}
              value={this.state.userInput}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
