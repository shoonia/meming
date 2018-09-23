import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const GoBackButton = ({ onClick, hidden }) => (
  <div className="container has-text-centered" hidden={hidden}>
    <Button onClick={onClick} aria-hidden={hidden}>
      Back to Top
    </Button>
  </div>
);

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default GoBackButton;
