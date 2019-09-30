import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import Navigation from './navigation/navigation.component';
import BurgerIcon from './burger-icon/burger-icon.component';
import './header.styles.scss';

const Header = props => {
  const headerRef = useRef(null);

  const [sticky, setSticky] = useState(false);

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
    <header ref={headerRef} className={`header${sticky ? ' sticky' : ''}`}>
      <nav>
        <Navigation />
        <BurgerIcon />
      </nav>
    </header>
  );
};

export default Header;
