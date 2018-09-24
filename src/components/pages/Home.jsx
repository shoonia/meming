import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getItems,
  getNumberOfPage,
  getPageCount,
  isPageLoading,
} from '../../selectors';
import { getPageByNumber } from '../../actions/page';
import Paginate from './paginate/Paginate';
import List from './list/List';
import GoBackButton from './helpers/GoBackButton';
import Modal from './modal/Modal';

class Home extends React.PureComponent {
  static defaultProps = {
    pageNumber: 1,
  };

  static propTypes = {
    history: PropTypes.shape().isRequired,
    pageNumber: PropTypes.number,
    pageCount: PropTypes.number.isRequired,
    getPage: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  state = {
    showModal: false,
    image: '',
  };

  componentDidMount() {
    window.addEventListener('popstate', this.onPopstate);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.onPopstate);
  }

  onPopstate = () => {
    // Close modal window on `popstate` event
    // ("back" button on the mobile)
    const { history } = this.props;
    const { showModal } = this.state;
    if (showModal) {
      history.go(1);
      this.handleCloseModal();
    }
  };

  backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  handleCloseModal = () => {
    document.documentElement.style.overflow = 'auto';
    this.setState({
      showModal: false,
      image: '',
    });
  };

  handleOpenModal = (image) => {
    document.documentElement.style.overflow = 'hidden';
    this.setState({
      showModal: true,
      image,
    });
  };

  render() {
    const {
      history,
      pageNumber,
      pageCount,
      getPage,
      items,
      isLoading,
    } = this.props;
    const { showModal, image } = this.state;

    return (
      <React.Fragment>
        <Paginate
          pageCount={pageCount}
          pageNumber={pageNumber}
          historyPush={history.push}
          onPageChange={getPage}
        />
        <List
          items={items}
          isLoading={isLoading}
          openModal={this.handleOpenModal}
        />
        <GoBackButton
          onClick={this.backToTop}
          hidden={isLoading || items.length <= 1}
        />
        <Modal
          isOpen={showModal}
          colseModal={this.handleCloseModal}
          image={image}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  items: getItems(state),
  pageCount: getPageCount(state),
  pageNumber: getNumberOfPage(ownProps),
  isLoading: isPageLoading(state),
});

const mapDispatchToProps = {
  getPage: getPageByNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
