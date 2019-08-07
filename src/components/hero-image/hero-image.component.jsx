import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Chevron } from '../../assets/images/down-chevron.svg';
import './hero-image.styles.scss';

const HeroImage = ({ imageSrc, title, last, right, link }) => {
  const elementRef = useRef(null);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const image = document.createElement('img');
    image.addEventListener('load', () => {
      setShowImage(true);
    });
    image.src = imageSrc;
  });

  const handleScroll = () => {
    window.scrollTo({
      top: elementRef.current.offsetTop + window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={elementRef} className="hero">
      <img src={imageSrc} alt="Hero" className={showImage ? 'show' : ''} />
      <div className={`hero__inner${right ? ' hero__inner--right' : ''}`}>
        <h1 className="hero__page-title">{link ? <Link to={link}>{title}</Link> : title}</h1>
      </div>
      {!last && (
        <button onClick={handleScroll} className="hero__scroll-down">
          <Chevron />
        </button>
      )}
    </section>
  );
};

export default HeroImage;
