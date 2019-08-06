import React from 'react';
import './hero-image.styles.scss';

const HeroImage = ({ imageSrc, title }) => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className='hero'>
      <img src={imageSrc} alt='Hero' />
      <div className='hero__inner'>
        <h1 className='hero__page-title'>{title}</h1>
      </div>
      <div className='hero__inner'>
        <button onClick={handleScroll} className='scroll-down'>
          ▼
        </button>
      </div>
    </section>
  );
};

export default HeroImage;
