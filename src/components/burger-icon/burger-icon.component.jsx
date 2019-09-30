import React, { useState } from 'react';
import './burger-icon.styles.scss';

const BurgerIcon = props => {
  const [active, setActive] = useState(false);

  return (
    <button className={`menu-button${active ? ' active' : ''}`} onClick={() => setActive(!active)}>
      <div className="menu-button__burger-icon"></div>
    </button>
  );
};

export default BurgerIcon;
