import React from 'react';
import PropTypes from 'prop-types';

const GridButton = ({ onClick, loading, disabled }) => {
  const isLoading = loading ? ' is-loading' : '';
  const className = `button is-info is-large is-rounded${isLoading}`;

  return (
    <div className="section has-text-centered">
      <button
        type="button"
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
      See More
      </button>
    </div>
  );
};

GridButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default GridButton;
