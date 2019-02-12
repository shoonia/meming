import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';
import Icon from '../lib/Icon';
import css from './NavigationBar.module.scss';

const NavigationBarView = (props) => {
  const {
    goTop,
    goNextPage,
    prevDisabled,
    nextDisabled,
    hidden,
  } = props;

  return (
    <nav
      className={css.container}
      hidden={hidden}
      aria-hidden={hidden}
      aria-label="page navigation"
      role="navigation"
    >
      <Button
        onClick={goNextPage(-1)}
        disabled={prevDisabled}
        aria-label="previous page"
        aria-disabled={prevDisabled}
      >
        <Icon type="chevron-left" />
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={goTop}
        aria-label="back to top"
      >
        <Icon type="chevron-up" />
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={goNextPage(1)}
        disabled={nextDisabled}
        aria-label="next page"
        aria-disabled={nextDisabled}
      >
        <Icon type="chevron-right" />
      </Button>
    </nav>
  );
};

NavigationBarView.propTypes = {
  goTop: PropTypes.func.isRequired,
  goNextPage: PropTypes.func.isRequired,
  prevDisabled: PropTypes.bool.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default NavigationBarView;
