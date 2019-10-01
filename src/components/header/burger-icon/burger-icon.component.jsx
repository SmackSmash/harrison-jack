import React from 'react';
import './burger-icon.styles.scss';

const BurgerIcon = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <button
      className={`menu-button${mobileMenuOpen ? ' active' : ''}`}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <div className="menu-button__burger-icon"></div>
    </button>
  );
};

export default BurgerIcon;
