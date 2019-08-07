import React from 'react';
import './text-block.styles.scss';

const TextBlock = props => {
  return <div className="text-block">{props.children}</div>;
};

export default TextBlock;
