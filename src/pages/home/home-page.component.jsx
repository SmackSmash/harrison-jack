import React from 'react';
import { Helmet } from 'react-helmet';
import MobileLogo from '../../components/mobile-logo/mobile-logo.component';
import HeroImage from '../../components/hero-image/hero-image.component';
import advertisingImage from '../../assets/images/galleries/advertising/large.jpg';
import interiorImage from '../../assets/images/galleries/interiors/large.jpg';
import chaletImage from '../../assets/images/galleries/chalets/large.jpg';
import weddingImage from '../../assets/images/galleries/weddings/large.jpg';
import foodImage from '../../assets/images/galleries/food/large.jpg';
import locationImage from '../../assets/images/galleries/locations/large.jpg';
import peopleImage from '../../assets/images/galleries/people/large.jpg';
import personalImage from '../../assets/images/galleries/personal/large.jpg';
import Footer from '../../components/footer/footer.component';

const HomePage = props => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MobileLogo />
      <HeroImage title="advertising" first right imageSrc={advertisingImage} />
      <HeroImage title="interiors" imageSrc={interiorImage} />
      <HeroImage title="chalets" right imageSrc={chaletImage} />
      <HeroImage title="weddings" imageSrc={weddingImage} />
      <HeroImage title="food" link="gallery/food" right imageSrc={foodImage} />
      <HeroImage title="locations" imageSrc={locationImage} />
      <HeroImage title="people" right imageSrc={peopleImage} />
      <HeroImage title="personal" last imageSrc={personalImage} />
      <Footer />
    </>
  );
};

export default HomePage;
