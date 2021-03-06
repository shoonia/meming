import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import css from './Time.module.scss';

function toLocaleString(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
  });
}

function Time({ date }) {
  return (
    <time
      dateTime={date}
      className={css.time}
    >
      <Icon type="calendar" />
      &nbsp;
      {toLocaleString(date)}
    </time>
  );
}

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;
