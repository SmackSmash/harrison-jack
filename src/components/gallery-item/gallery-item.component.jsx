import React, { useRef, useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import _ from 'lodash';
import './gallery-item.styles.scss';

const GalleryItem = ({ category, imageNumber }) => {
  const imageRef = useRef(null);

  const [spans, setSpans] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    imageRef.current.onload = () => {
      updateSpans();
    };
    window.addEventListener('resize', _.throttle(updateSpans, 100));
  });

  const updateSpans = () => {
    imageRef.current && setSpans(Math.floor(imageRef.current.clientHeight / 4) + 2);
  };

  const loadImage = () => {
    if (!showImage) {
      const image = new Image();
      image.onload = () => {
        setShowImage(true);
        imageRef.current.src = require(`../../assets/images/galleries/${category}/${imageNumber}.jpg`);
      };
      image.src = require(`../../assets/images/galleries/${category}/${imageNumber}.jpg`);
    }
  };

  return (
    <div className="item" style={{ gridRowEnd: `span ${spans}` }}>
      <Waypoint onEnter={loadImage} />
      <img ref={imageRef} src="" alt={`${category}`} className={showImage ? 'show' : ''} />
      <div className="item__overlay">
        <button>+</button>
      </div>
    </div>
  );
};

export default GalleryItem;
