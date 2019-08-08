import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import Spinner from '../spinner/spinner.component';
import { ReactComponent as DownChevron } from '../../assets/images/down-chevron.svg';
import { ReactComponent as UpChevron } from '../../assets/images/up-chevron.svg';
import './hero-image.styles.scss';

const HeroImage = ({ imageSrc, title, last, right, link, first }) => {
  const elementRef = useRef(null);

  const [showImage, setShowImage] = useState(false);
  const [heroTitle, setHeroTitle] = useState(title);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    first && loadImage();
  });

  const loadImage = () => {
    if (!showImage) {
      const image = new Image();
      image.onload = () => {
        setShowImage(true);
      };
      image.src = imageSrc;
    }
  };

  const handleScroll = direction => {
    let scrollPosition = '';
    if (direction === 'up') {
      scrollPosition = elementRef.current.offsetTop - window.innerHeight;
    } else if (direction === 'down') {
      scrollPosition = elementRef.current.offsetTop + window.innerHeight;
    }
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleMouseEnter = () => {
    setHeroTitle(`view ${title}`);
  };

  const handleMouseLeave = () => {
    setHeroTitle(title);
  };

  const handleWaypointEnter = () => {
    setShowTitle(true);
  };

  const handleWaypointLeave = () => {
    setShowTitle(false);
  };

  return (
    <section ref={elementRef} className="hero">
      <Waypoint onEnter={loadImage} />
      {!showImage && <Spinner />}
      <img src={showImage ? imageSrc : ''} alt="Hero" className={showImage ? 'show' : ''} />
      <div className="hero__inner">
        {!first && (
          <button onClick={() => handleScroll('up')} className="hero__scroll hero__scroll--up">
            <UpChevron />
          </button>
        )}
      </div>
      <Waypoint onEnter={handleWaypointEnter} />
      <div className={`hero__inner${right ? ' hero__inner--right' : ''}`}>
        {title && (
          <h1 className={`page-title${showTitle ? ' page-title--show' : ''}`}>
            {link ? (
              <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={link}>
                {`//${heroTitle}`}
              </Link>
            ) : (
              <span>{`//${heroTitle}`}</span>
            )}
          </h1>
        )}
      </div>
      <Waypoint onLeave={handleWaypointLeave} />
      <div className="hero__inner">
        {!last && (
          <button onClick={() => handleScroll('down')} className="hero__scroll hero__scroll--down">
            <DownChevron />
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroImage;
