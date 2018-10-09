import React from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';
import Time from '../helpers/Time';

const GridList = ({ items }) => items.map(item => (
  <GridItem key={item.id}>
    <h3 className="title is-4 has-text-centered">
      {item.title}
    </h3>
    <figure>
      <img src={item.image} alt={item.title} />
      <p>{item.body}</p>
    </figure>
    <Time date={item.date} />
  </GridItem>
));

GridList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default GridList;
