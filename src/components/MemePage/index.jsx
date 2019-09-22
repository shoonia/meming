import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectIsMemeExist,
  selectMemePage,
  selectIsMemeLoading,
  selectHasMemeError,
} from '../../selectors';
import { getMemePageById, clearPage } from '../../actions/meme';
import MemeView from './MemeView';
import MemeLoader from './MemeLoader';
import Loadable from '../lib/Loadable';

const NotFound = Loadable(() => import('../NotFound' /* webpackChunkName: "NotFound" */));
const { PUBLIC_URL } = process.env;

const selectors = (state) => ({
  item: selectMemePage(state),
  isExist: selectIsMemeExist(state),
  isLoading: selectIsMemeLoading(state),
  hasError: selectHasMemeError(state),
});

function Meme({ match: { params }, history }) {
  const dispatch = useDispatch();
  const {
    item,
    isExist,
    isLoading,
    hasError,
  } = useSelector(selectors);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(getMemePageById(params.id));
    return () => {
      dispatch(clearPage());
    };
  }, [params.id]);

  const goBack = () => {
    if (history.action === 'PUSH') {
      history.goBack();
    } else {
      history.push(`${PUBLIC_URL}/`);
    }
  };

  if (isLoading) {
    return (
      <MemeLoader />
    );
  }

  if (isExist) {
    return (
      <MemeView
        {...item}
        onClick={goBack}
      />
    );
  }

  if (hasError) {
    return (
      <NotFound />
    );
  }

  return null;
}

Meme.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Meme;
