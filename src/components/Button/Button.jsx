import React from 'react';
import './Button.css';

function Button(props) {
  const { label, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;