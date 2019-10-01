import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import './mobile-logo.styles.scss';

const MobileLogo = props => {
  return (
    <div className="mobile-logo">
      <Link exact to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default MobileLogo;
