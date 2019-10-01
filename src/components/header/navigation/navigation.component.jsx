import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import './navigation.styles.scss';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/" exact onClick={() => setMobileMenuOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
          About
        </NavLink>
      </li>
      <li className="logo-container">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <Logo className="logo" alt="Logo" />
        </Link>
      </li>
      <li>
        <NavLink to="/galleries" onClick={() => setMobileMenuOpen(false)}>
          Galleries
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
