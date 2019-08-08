import React from 'react';
import GalleryImage from '../gallery-image/gallery-image.component';
import './gallery.styles.scss';

const Gallery = ({ category, numberOfImages }) => {
  const getImages = () => {
    const imagesArray = [];
    for (let i = 1; i <= numberOfImages; i++) {
      imagesArray.push(<GalleryImage key={i} category={category} imageNumber={i} />);
    }
    return <div className="gallery">{imagesArray}</div>;
  };

  return getImages();
};

export default Gallery;
