import React from 'react';
import './spinner.styles.scss';

const Spinner = ({ dark }) => {
  return (
    <div className={`spinner ${dark ? 'spinner--dark' : ''}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
