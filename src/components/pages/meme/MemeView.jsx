import React from 'react';
import PropTypes from 'prop-types';

import Time from '../../helpers/Time';
import { Figure } from './meme-styled';

const MemeView = (props) => {
  const {
    title,
    image,
    body,
    date,
  } = props;

  return (
    <main className="has-text-centered">
      <h1 className="title is-4">{title || '***'}</h1>
      <Figure>
        <img src={image} alt={title} />
        <p>{body}</p>
      </Figure>
      <Time date={date} />
    </main>
  );
};

MemeView.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MemeView;
