import React from 'react';
import HeroImage from '../../components/hero-image/hero-image.component';
import TextBlock from '../../components/text-block/text-block.component';
import Gallery from '../../components/gallery/gallery.component';
import heroImage from '../../assets/images/galleries/food/large.jpg';

const FoodPage = props => {
  return (
    <>
      <HeroImage title='//FOOD' imageSrc={heroImage} />
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis placerat dolor.
        Quisque accumsan nibh vulputate, commodo nibh eu, convallis ipsum. Fusce ultrices metus at
        convallis viverra. Suspendisse imperdiet mi eu eleifend eleifend. Quisque eu ante vitae sem
        tincidunt sollicitudin vitae vel neque. Suspendisse nec urna id felis pretium ullamcorper
        vitae eu velit. Sed eu metus dapibus, dictum ex eu, hendrerit diam. Integer id fringilla
        eros.
      </TextBlock>
      <Gallery />
    </>
  );
};

export default FoodPage;
