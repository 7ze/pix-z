import * as React from 'react';
import { ImageCard } from '../ImageCard';
import './ImageList.sass';

interface Props {
  images: any[];
}

export const ImageList: React.FC<Props> = ({ images }) => {
  const imageList = images.map((image) => <ImageCard image={image} />);
  return <div className="image-list">{imageList}</div>;
};
