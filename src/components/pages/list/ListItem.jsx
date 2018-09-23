import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Time from '../helpers/Time';
import { ArticleFadeIn, Img } from './list-styled';

const { PUBLIC_URL } = process.env;

const ListItem = (props) => {
  const {
    id,
    title,
    body,
    image,
    date,
  } = props;

  return (
    <ArticleFadeIn className="container box">
      <h3 className="title is-4 has-text-centered">
        <NavLink to={`${PUBLIC_URL}/post/${id}`}>
          {title || '***'}
        </NavLink>
      </h3>
      <figure className="has-text-centered">
        <Img src={image} alt={title} />
        <p>{body}</p>
      </figure>
      <Time date={date} />
    </ArticleFadeIn>
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
