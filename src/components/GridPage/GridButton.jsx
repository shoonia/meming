import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';
import css from './GridPage.module.scss';

const GridButton = ({ onClick, disabled }) => (
  <div className={css.section}>
    <Button
      onClick={onClick}
      disabled={disabled}
    >
      See More
    </Button>
  </div>
);

GridButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default GridButton;
