import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectListItems,
  selectIsListLoading,
  selectListPageNumber,
} from '../../selectors';
import { hideScroll } from '../../utils/home';
import Paginate from '../Paginate';
import List from './List';
import Modal from '../lib/Modal';
import NavigationBar from '../NavigationBar';

class Home extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
  };

  state = {
    showModal: false,
    src: '',
  };

  componentDidMount() {
    window.addEventListener('popstate', this.onPopstate);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.onPopstate);
  }

  onPopstate = () => {
    const { showModal } = this.state;
    if (showModal) {
      this.handleCloseModal();
    }
  };

  handleCloseModal = () => {
    hideScroll(false);
    this.setState({
      showModal: false,
      src: '',
    });
  };

  handleOpenModal = ({ src }) => {
    const { history } = this.props;

    history.push(1);
    hideScroll(true);
    this.setState({
      showModal: true,
      src,
    });
  };

  render() {
    const { items, isLoading, currentPage } = this.props;
    const { src, showModal } = this.state;

    return (
      <>
        <Paginate />
        <List
          items={items}
          isLoading={isLoading}
          openModal={this.handleOpenModal}
          currentPage={currentPage}
        />
        <NavigationBar />
        <Modal
          isOpen={showModal}
          colseModal={this.handleCloseModal}
          src={src}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: selectListItems(state),
  isLoading: selectIsListLoading(state),
  currentPage: selectListPageNumber(state),
});

export default connect(mapStateToProps)(Home);
