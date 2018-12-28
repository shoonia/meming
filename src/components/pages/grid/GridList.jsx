import React from 'react';
import PropTypes from 'prop-types';

import Time from '../helpers/Time';
import css from './grid.module.scss';

const GridList = ({ items }) => items.map(item => (
  <article
    key={item.id}
    className={css.item}
  >
    <h2 className={css.title}>
      {item.title}
    </h2>
    <figure>
      <img {...item.image} alt={item.title} />
      <figcaption>
        {item.body}
      </figcaption>
    </figure>
    <Time date={item.date} />
  </article>
));

GridList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default GridList;
