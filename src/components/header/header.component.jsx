import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Header = props => {
  const headerRef = useRef(null);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > headerRef.current.clientHeight) {
        setSticky(true);
      } else if (window.pageYOffset === 0) {
        setSticky(false);
      }
    };
  });

  return (
    <header ref={headerRef} className={`header${sticky ? ' sticky' : ''}`}>
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="logo-container">
            <Link to="/">
              <Logo className="logo" alt="Logo" />
            </Link>
          </li>
          <li>
            <NavLink to="/galleries">Galleries</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;