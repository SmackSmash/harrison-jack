import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import './mobile-logo.styles.scss';

const MobileLogo = props => {
  return (
    <div className="mobile-logo">
      <Logo />
    </div>
  );
};

export default MobileLogo;
