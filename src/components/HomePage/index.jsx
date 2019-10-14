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
import HomeModal from './HomeModal';
import NavigationBar from '../NavigationBar';

class Home extends React.PureComponent {
  defaultItem = {
    title: '',
    body: '',
    src: '',
    id: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      item: {
        ...this.defaultItem,
      },
    };
  }

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
      item: {
        ...this.defaultItem,
      },
    });
  };

  handleOpenModal = (id) => {
    const { history, items } = this.props;
    const item = items.find((e) => e.id === id);

    if (item === undefined) {
      return;
    }

    history.push(1);
    hideScroll(true);
    this.setState({
      showModal: true,
      item: {
        title: item.title,
        body: item.body,
        src: item.image.src,
        id: item.id,
      },
    });
  };

  render() {
    const { items, isLoading, currentPage } = this.props;
    const { item, showModal } = this.state;

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
        <HomeModal
          isOpen={showModal}
          close={this.handleCloseModal}
          item={item}
        />
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  items: selectListItems(state),
  isLoading: selectIsListLoading(state),
  currentPage: selectListPageNumber(state),
});

export default connect(mapStateToProps)(Home);
