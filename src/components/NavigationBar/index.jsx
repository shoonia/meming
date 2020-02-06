import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectListPageNumber,
  selectListPageCount,
  selectListLength,
  selectIsListLoading,
} from '../../selectors';
import { getPageByNumber } from '../../actions/list';
import NavigationBarView from './NavigationBarView';
import { PUBLIC_URL } from '../../constants';

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const selectors = (state) => ({
  pageNumber: selectListPageNumber(state),
  pageCount: selectListPageCount(state),
  pageLength: selectListLength(state),
  isLoading: selectIsListLoading(state),
});

function NavigationBar({ history }) {
  const dispatch = useDispatch();
  const {
    pageNumber,
    pageCount,
    pageLength,
    isLoading,
  } = useSelector(selectors);

  const goNextPage = (page) => () => {
    const nextPage = pageNumber + page;

    dispatch(getPageByNumber(nextPage));
    window.scrollTo({ top: 0 });
    history.push(`${PUBLIC_URL}/page/${nextPage}`);
  };

  return (
    <NavigationBarView
      goTop={goTop}
      goNextPage={goNextPage}
      prevDisabled={pageNumber <= 1}
      nextDisabled={pageNumber >= pageCount}
      hidden={pageLength < 1 || isLoading}
    />
  );
}

NavigationBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NavigationBar);
