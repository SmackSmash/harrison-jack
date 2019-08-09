import React from 'react';
import './about-page.styles.scss';

const AboutPage = props => {
  return (
    <div className="non-image-page">
      <h1>About HarrisonJack</h1>
      <div className="about-container">
        <div>
          <p>
            HarrisonJack is Christine Harrison and Iain Jack, based in Manchester, they have worked
            together for over 20 years in the advertising, commercial and editorial world, where
            they gained many awards and plaudits.
          </p>
          <p>
            Christine started her career at the acclaimed Blackpool college, worked for advertising
            photographers in London and Manchester before setting up on her own.
          </p>
          <p>
            Iain attended Mid Cheshire college of photography, worked for several top Manchester and
            London photographers before joining Christine in her studio in Manchester and becoming
            her business partner.
          </p>
          <p>Both Iain &amp; Christine work independently on projects as well as together.</p>
        </div>
        <div>
          <img
            src={require('../../assets/images/about.jpg')}
            alt="Chris Harrison &amp; Iain Jack"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
