import React from 'react';
import PropTypes from 'prop-types';

const style = { maxWidth: '600px' };

const MemeItem = ({ title, body, image }) => (
  <article className="container box" style={style}>
    <h3 className="title">
      { title || '***' }
    </h3>
    <figure>
      <img src={image} alt={title} className="image" />
      <p>{ body }</p>
    </figure>
  </article>
);

MemeItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MemeItem;
