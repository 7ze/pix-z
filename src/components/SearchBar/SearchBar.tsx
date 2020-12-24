import * as React from 'react';
import './SearchBar.sass';

interface State {
  term: string;
}

interface Props {
  onSubmit: (url: string, term: string) => void;
}

export class SearchBar extends React.Component<Props, State> {
  state = {
    term: '',
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit('search/photos', this.state.term);
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
