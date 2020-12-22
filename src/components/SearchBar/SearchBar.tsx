import React, { Component, ChangeEvent } from 'react';
import './SearchBar.sass';

interface State {
  term: string;
}

interface Props {
  onSubmit: (term: string) => void;
}

export class SearchBar extends Component<Props, State> {
  // * declaring State as a readonly type
  state: Readonly<State> = {
    term: '',
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.term);
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
              value={this.state.term}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
