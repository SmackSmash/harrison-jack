import React, { useState, useEffect } from 'react';
import './gallery.component.scss';

const Gallery = props => {
  const [HTML, setHTML] = useState([]);

  useEffect(() => {
    const generateHTML = (repeat = 1) => {
      let htmlArray = [];
      let generateSmall = false;
      for (let i = 1; i <= repeat; i++) {
        generateSmall = !generateSmall;
        htmlArray.push(
          <div
            key={i}
            className={`item ${
              generateSmall ? 'h1 v1' : `h${randomNumber(4)} v${randomNumber(4)}`
            }`}
          >
            <img src={require(`../../assets/images/galleries/food/${i}.jpg`)} alt="foodimage" />
            <div className="item__overlay">
              <button>+</button>
            </div>
          </div>
        );
      }
      return htmlArray;
    };
    setHTML(generateHTML(12));
  }, []);

  const randomNumber = (limit = 1) => {
    return Math.ceil(Math.random() * limit);
  };

  // const items = document.querySelectorAll('.item');
  // items.forEach(item =>
  //   item.addEventListener('click', () => {
  //     overlayImage.src = item.querySelector('img').src;
  //     overlay.classList.add('open');
  //   })
  // );

  // overlayClose.addEventListener('click', () => {
  //   overlay.classList.remove('open');
  // });

  return <section className="gallery">{HTML.map(image => image)}</section>;
};

export default Gallery;
