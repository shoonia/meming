import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIdOfMeme } from '../../selectors';
import { getMemeById } from '../../actions/meme';

class Meme extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    pageMount: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { id, pageMount } = this.props;
    pageMount(id);
  }

  render() {
    const { id } = this.props;

    return `Meme's id is ${id}`;
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: getIdOfMeme(ownProps),
});

const mapDispatchToProps = {
  pageMount: getMemeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meme);
