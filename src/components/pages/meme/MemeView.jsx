import React from 'react';
import PropTypes from 'prop-types';

const MemeView = (props) => {
  const {
    title,
    image,
    body,
    date,
  } = props;

  return (
    <main className="hero has-text-centered">
      <h1 className="title is-1">{title || '***'}</h1>
      <figure className="hero-body">
        <img src={image} alt={title} />
        <p>{body}</p>
      </figure>
      <time dateTime={date}>
        {new Date(date).toLocaleDateString()}
      </time>
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
