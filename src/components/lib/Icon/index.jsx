import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';

import css from './Icon.module.scss';

const styles = cn.bind(css);

function Icon({ type, ...rest }) {
  return (
    <span
      className={styles(type)}
      role="presentation"
      {...rest}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
