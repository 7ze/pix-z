import * as React from 'react';
import './ImageList.sass';

interface Props {
  images: any[];
}

export const ImageList: React.FC<Props> = ({ images }) => {
  const imageList = images.map((image) => (
    <img
      src={image.urls.regular}
      alt=""
      key={image.id}
      className="ui fluid image"
    />
  ));
  return <div className="image-list ui medium images">{imageList}</div>;
};
