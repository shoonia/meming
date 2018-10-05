import React from 'react';
import PropTypes from 'prop-types';

import GridItem from './GridItem';

const GridList = ({ items }) => items.map(item => (
  <GridItem key={item.id}>
    <img src={item.image} alt={item.title} />
  </GridItem>
));

GridList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridList;
