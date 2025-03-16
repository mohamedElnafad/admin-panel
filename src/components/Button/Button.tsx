import React from 'react';

const Button = (props: { title: string; color: string }) => {
  return (
    <button className={`btn rounded-pill w-100  ${props.color}`}>
      {props.title}
    </button>
  );
};

export default Button;
