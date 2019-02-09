import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

const options = {
  year: 'numeric',
  month: 'short',
  weekday: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  // second: 'numeric',
};

const Time = ({ date }) => (
  <time dateTime={date} className="has-text-grey-dark is-size-7">
    <Icon type="calendar" />
    &nbsp;{new Date(date).toLocaleString([], options)}
  </time>
);

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;
