import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import './navigation.styles.scss';

const Navigation = props => {
  return (
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
  );
};

export default Navigation;
