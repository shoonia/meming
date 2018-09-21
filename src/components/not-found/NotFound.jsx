import React from 'react';
import { Link } from 'react-router-dom';

import { ROOT_URL } from '../../constants';
import image from './error-404.gif';

const NotFound = () => (
  <section className="has-text-centered" role="alert">
    <figure>
      <h1 aria-label="Error 404 not found">
        <span />
      </h1>
      <img src={image} alt="Error 404 not found" />
    </figure>
    <Link className="is-size-4" to={`${ROOT_URL}/`}>
      Home
    </Link>
  </section>
);

export default NotFound;
