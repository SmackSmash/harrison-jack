import React from 'react';
import { Helmet } from 'react-helmet';
import HeroImage from '../../components/hero-image/hero-image.component';
import TextBlock from '../../components/text-block/text-block.component';
import Gallery from '../../components/gallery/gallery.component';
import heroImage from '../../assets/images/galleries/food/large.jpg';

const FoodPage = props => {
  return (
    <>
      <Helmet>
        <title>Food Gallery</title>
      </Helmet>
      <HeroImage title="//FOOD" imageSrc={heroImage} />
      <TextBlock>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis placerat dolor.
        </p>
        <p>
          Quisque accumsan nibh vulputate, commodo nibh eu, convallis ipsum. Fusce ultrices metus at
          convallis viverra. Suspendisse imperdiet mi eu eleifend eleifend. Quisque eu ante vitae
          sem tincidunt sollicitudin vitae vel neque.
        </p>
      </TextBlock>
      <Gallery />
    </>
  );
};

export default FoodPage;
