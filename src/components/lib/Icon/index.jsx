import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import css from './Icon.module.scss';

const styles = classNames.bind(css);

const Icon = ({ type, ...rest }) => (
  <span
    className={styles(type)}
    role="presentation"
    {...rest}
  />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
