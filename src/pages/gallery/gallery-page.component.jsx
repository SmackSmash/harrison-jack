import React from 'react';
import { Helmet } from 'react-helmet';
import HeroImage from '../../components/hero-image/hero-image.component';
import TextBlock from '../../components/text-block/text-block.component';
import Gallery from '../../components/gallery/gallery.component';
import Footer from '../../components/footer/footer.component';
import galleriesData from '../../data/galleries';

const FoodPage = ({
  match: {
    params: { category }
  }
}) => {
  const galleryData = galleriesData.find(data => data.category === category);
  return (
    <>
      <Helmet>
        <title>{`${galleryData.title} Gallery`}</title>
      </Helmet>
      <HeroImage first imageSrc={require(`../../assets/images/galleries/${category}/large.jpg`)} />
      <TextBlock>
        <p>{galleryData.text}</p>
      </TextBlock>
      <Gallery category={category} numberOfImages={galleryData.images} />
      <Footer />
    </>
  );
};

export default FoodPage;
