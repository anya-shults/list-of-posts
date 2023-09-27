import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export const Button = ({ path, name = path, id }) => {
  return (
    <Link to={`${path}/${id}`} className='button'>
      {name}
    </Link>
  );
};
