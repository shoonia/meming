import React from 'react';
import PropTypes from 'prop-types';

const style = { maxWidth: '600px' };

const MemeItem = (props) => {
  const {
    title,
    body,
    image,
    date,
  } = props;

  return (
    <article className="container box" style={style}>
      <h3 className="title is-4">
        { title || '***' }
      </h3>
      <figure className="image">
        <img src={image} alt={title} />
        <p>{ body }</p>
      </figure>
      <time dateTime={date}>
        { new Date(date).toLocaleDateString() }
      </time>
    </article>
  );
};

MemeItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MemeItem;
