import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = ({ items }) => (
  <main className="section">
    {items.map(meme => (
      <ListItem key={meme.id} {...meme} />
    ))}
  </main>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
