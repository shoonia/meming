import React from 'react';
import PropTypes from 'prop-types';

import MemeItem from './MemeItem';

const Memes = ({ items }) => (
  <main className="section">
    {items.map(meme => (
      <MemeItem key={meme.id} {...meme} />
    ))}
  </main>
);

Memes.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Memes;
