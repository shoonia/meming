import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import ListLoader from './ListLoader';
import css from './List.module.scss';

const List = (props) => {
  const {
    items,
    isLoading,
    openModal,
    currentPage,
  } = props;

  if (isLoading) {
    return (
      <div className={css.section}>
        <ListLoader />
      </div>
    );
  }

  return (
    <main className={css.section}>
      <h1 className={css.srOnly}>
        {`List of memes. Page ${currentPage}`}
      </h1>
      {items.map((meme, i) => (
        <ListItem
          {...meme}
          key={meme.id}
          openModal={openModal}
          isLazy={i > 2}
        />
      ))}
    </main>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default List;
