import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.scss';

function Button({ children, ...rest }) {
  return (
    <button
      {...rest}
      type="button"
      className={css.btn}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
