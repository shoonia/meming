import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import css from './Time.module.scss';

const toLocaleString = (date) => new Date(date).toLocaleString([], {
  year: 'numeric',
  month: 'short',
  weekday: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  // second: 'numeric',
});

const Time = ({ date }) => (
  <time
    dateTime={date}
    className={css.time}
  >
    <Icon type="calendar" />
    &nbsp;
    {toLocaleString(date)}
  </time>
);

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;
