import React from 'react';
import PropTypes from 'prop-types';

const style = {
  width: '88vw',
  maxWidth: '600px',
};

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
      <figure>
        <img src={image} alt={title} style={style} />
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
