import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ date }) => (
  <time dateTime={date} className="has-text-grey-dark is-size-7">
    {new Date(date).toLocaleString()}
  </time>
);

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;
