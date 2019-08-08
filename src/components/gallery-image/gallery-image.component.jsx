import React, { useRef, useEffect, useState } from 'react';

const GalleryImage = ({ category, imageNumber }) => {
  const imageRef = useRef(null);

  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imageRef.current.onload = () => {
      console.log(imageRef.current.clientHeight);
      setSpans(Math.floor(imageRef.current.clientHeight / 2));
    };
  });

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

export default GalleryImage;
