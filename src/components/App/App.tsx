import * as React from 'react';
import { getImages } from '../../api';
import { SearchBar } from '../SearchBar';
import { ImageList } from '../ImageList';
import './App.sass';

interface State {
  images: [];
}

interface Props {}

export class App extends React.Component<Props, State> {
  state: State = {
    images: [],
  };

  onSearchSubmit = async (url: string, term: string) => {
    const { images, error } = await getImages(url, term);
    if (error) {
      console.debug(error);
    } else {
      this.setState({
        images: images,
      });
    }
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
