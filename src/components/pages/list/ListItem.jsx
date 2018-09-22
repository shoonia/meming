import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROOT_URL } from '../../../constants';
import Time from '../../helpers/Time';

export const styleWrapper = {
  maxWidth: '600px',
};

export const styleImg = {
  maxHeight: '40vh',
};

const ListItem = (props) => {
  const {
    id,
    title,
    body,
    image,
    date,
  } = props;

  return (
    <article className="container box" style={styleWrapper}>
      <h3 className="title is-4 has-text-centered">
        <NavLink to={`${ROOT_URL}/post/${id}`}>
          {title || '***'}
        </NavLink>
      </h3>
      <figure className="has-text-centered">
        <img src={image} alt={title} style={styleImg} />
        <p>{body}</p>
      </figure>
      <Time date={date} />
    </article>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ListItem;
