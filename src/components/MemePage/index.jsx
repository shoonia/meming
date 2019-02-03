import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getIdOfMeme,
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

class Meme extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      action: PropTypes.string.isRequired,
      push: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    pageMount: PropTypes.func.isRequired,
    pageUnmount: PropTypes.func.isRequired,
    isExist: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    item: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { id, pageMount } = this.props;
    pageMount(id);
    window.scrollTo({ top: 0 });
  }

  componentWillUnmount() {
    const { pageUnmount } = this.props;
    pageUnmount();
  }

  goBack = () => {
    const { history } = this.props;

    if (history.action === 'PUSH') {
      history.goBack();
    } else {
      history.push(`${PUBLIC_URL}/`);
    }
  }

  render() {
    const {
      isExist,
      isLoading,
      hasError,
      item,
    } = this.props;

    if (isLoading) {
      return (
        <MemeLoader />
      );
    }

    if (isExist) {
      return (
        <MemeView
          {...item}
          onClick={this.goBack}
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
}

const mapStateToProps = (state, ownProps) => ({
  id: getIdOfMeme(ownProps),
  item: selectMemePage(state),
  isExist: selectIsMemeExist(state),
  isLoading: selectIsMemeLoading(state),
  hasError: selectHasMemeError(state),
});

const mapDispatchToProps = {
  pageMount: getMemePageById,
  pageUnmount: clearPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meme);
