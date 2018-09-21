import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROOT_URL } from '../../constants';

const NotFound = () => (
  <div className="has-text-centered" role="alert">
    <h1 className="title is-1">
      404: Not Found!
    </h1>
    <NavLink to={`${ROOT_URL}/`}>Home</NavLink>
  </div>
);

export default NotFound;
