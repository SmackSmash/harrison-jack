import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import Navigation from './navigation/navigation.component';
import BurgerIcon from './burger-icon/burger-icon.component';
import './header.styles.scss';

const Header = props => {
  const headerRef = useRef(null);

  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.onscroll = _.throttle(() => {
      if (window.pageYOffset > headerRef.current.clientHeight) {
        setSticky(true);
      } else if (window.pageYOffset < 300) {
        setSticky(false);
      }
    }, 100);
  });

  return (
    <header
      ref={headerRef}
      className={`header${sticky ? ' sticky' : ''}${mobileMenuOpen ? ' open' : ''}`}
    >
      <nav>
        <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <BurgerIcon mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </nav>
    </header>
  );
};

export default Header;
