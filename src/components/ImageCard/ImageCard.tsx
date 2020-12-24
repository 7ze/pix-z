import * as React from 'react';

interface Props {
  image: {
    description: string;
    urls: {
      regular: string;
    };
    id: string;
  };
}

interface State {}

export class ImageCard extends React.Component<Props, State> {
  render() {
    const { image } = this.props;
    const { description, urls, id } = image;

    return (
      <div className="image-card">
        <img
          src={urls.regular}
          alt={description}
          key={id}
          className="ui fluid image"
        />
      </div>
    );
  }
}
