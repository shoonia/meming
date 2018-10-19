import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getIdOfMeme,
  isMemeExist,
  getMeme,
  isMemeLoading,
} from '../../selectors';
import { getMemeById } from '../../actions/meme';
import MemeView from './meme/MemeView';
import MemeLoader from './meme/MemeLoader';

const { PUBLIC_URL } = process.env;

class Meme extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    id: PropTypes.string.isRequired,
    pageMount: PropTypes.func.isRequired,
    isExist: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    item: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { id, pageMount } = this.props;
    pageMount(id);
    window.scrollTo({ top: 0 });
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
    const { isExist, isLoading, item } = this.props;

    if (isLoading) {
      return <MemeLoader />;
    }

    if (isExist) {
      return <MemeView onClick={this.goBack} {...item} />;
    }

    return null;
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: getIdOfMeme(ownProps),
  item: getMeme(state),
  isExist: isMemeExist(state),
  isLoading: isMemeLoading(state),
});

const mapDispatchToProps = {
  pageMount: getMemeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meme);
