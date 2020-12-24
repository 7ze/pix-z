import * as React from 'react';

interface Props {
  image: {
    description: string;
    urls: {
      regular: string;
    };
  };
}

interface State {
  numberOfSpans: number;
}

const rowHeight = 20; // * height in px

export class ImageCard extends React.Component<Props, State> {
  imageRef = React.createRef<HTMLImageElement>();
  state: State = {
    numberOfSpans: 0,
  };

  setImageHeight = () => {
    const height = this.imageRef.current!.clientHeight;
    const numberOfSpans = Math.ceil(height / rowHeight + 1);
    this.setState({ numberOfSpans });
  };

  componentDidMount() {
    this.imageRef.current?.addEventListener('load', this.setImageHeight);
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.numberOfSpans}` }}
      >
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
          className="ui fluid image"
        />
      </div>
    );
  }
}
