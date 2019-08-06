import React from 'react';
import './text-block.styles.scss';

const TextBlock = props => {
  return (
    <div className='text-block'>
      <p>{props.children}</p>
    </div>
  );
};

export default TextBlock;
