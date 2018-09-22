import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import ListLoader from './ListLoader';

const List = ({ items, isLoading }) => {
  if (isLoading) {
    return <ListLoader />;
  }

  return (
    <main className="section">
      {items.map(meme => (
        <ListItem key={meme.id} {...meme} />
      ))}
    </main>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default List;
