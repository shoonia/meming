import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...rest }) => (
  <button
    {...rest}
    type="button"
    className="button is-info is-rounded"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
