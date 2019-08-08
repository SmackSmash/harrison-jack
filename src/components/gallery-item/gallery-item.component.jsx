import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import './gallery-item.styles.scss';

const GalleryItem = ({ category, imageNumber }) => {
  const imageRef = useRef(null);

  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imageRef.current.onload = () => {
      updateSpans();
    };
    window.addEventListener('resize', _.throttle(updateSpans, 100));
  });

  const updateSpans = () => {
    console.log('updating');
    setSpans(Math.floor(imageRef.current.clientHeight / 4) + 2);
  };

  return (
    <div className="item" style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        src={require(`../../assets/images/galleries/${category}/${imageNumber}.jpg`)}
        alt="foodimage"
      />
      <div className="item__overlay">
        <button>+</button>
      </div>
    </div>
  );
};

export default GalleryItem;
