import React from 'react';
import { Link } from 'react-router-dom';

import image from './error-404.gif';

const { PUBLIC_URL } = process.env;

const NotFound = () => (
  <section className="has-text-centered" role="alert">
    <figure>
      <h1 aria-label="Error 404 not found">
        <span />
      </h1>
      <img src={image} alt="Error 404 not found" />
    </figure>
    <Link className="is-size-4" to={`${PUBLIC_URL}/`}>
      Home
    </Link>
  </section>
);

export default NotFound;
