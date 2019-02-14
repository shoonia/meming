import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../lib/Image';
import imageSource from './error-404.gif';
import css from './NotFound.module.scss';

const { PUBLIC_URL } = process.env;

const NotFound = () => (
  <section
    className={css.container}
    role="alert"
  >
    <figure>
      <h1 className={css.title}>
        404 not found
      </h1>
      <Image
        src={imageSource}
        alt="404 not found"
      />
    </figure>
    <Link
      to={`${PUBLIC_URL}/`}
      className={css.btn}
    >
      Home
    </Link>
  </section>
);

export default NotFound;
