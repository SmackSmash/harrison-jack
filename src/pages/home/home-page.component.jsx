import React from 'react';
import { Helmet } from 'react-helmet';
import HeroImage from '../../components/hero-image/hero-image.component';
import advertisingImage from '../../assets/images/galleries/advertising/large.jpg';
import interiorImage from '../../assets/images/galleries/interior/large.jpg';
import chaletImage from '../../assets/images/galleries/chalet/large.jpg';
import weddingImage from '../../assets/images/galleries/wedding/large.jpg';
import foodImage from '../../assets/images/galleries/food/large.jpg';
import locationImage from '../../assets/images/galleries/location/large.jpg';
import peopleImage from '../../assets/images/galleries/people/large.jpg';
import personalImage from '../../assets/images/galleries/personal/large.jpg';

const HomePage = props => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroImage title="advertising" first right imageSrc={advertisingImage} />
      <HeroImage title="interiors" imageSrc={interiorImage} />
      <HeroImage title="chalets" right imageSrc={chaletImage} />
      <HeroImage title="weddings" imageSrc={weddingImage} />
      <HeroImage title="food" link="galleries/food" right imageSrc={foodImage} />
      <HeroImage title="locations" imageSrc={locationImage} />
      <HeroImage title="people" right imageSrc={peopleImage} />
      <HeroImage title="personal" last imageSrc={personalImage} />
    </>
  );
};

export default HomePage;
