import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, isPageLoading } from '../../selectors';
import Paginate from './paginate/Paginate';
import List from './list/List';
import GoBackButton from './helpers/GoBackButton';
import { hideScroll } from '../../utils/home';
import Modal from './modal/Modal';

class Home extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
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
    const { showModal } = this.state;
    if (showModal) {
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
    hideScroll(false);
    this.setState({
      showModal: false,
      image: '',
    });
  };

  handleOpenModal = (image) => {
    const { history } = this.props;

    history.push(1);
    hideScroll(true);
    this.setState({
      showModal: true,
      image,
    });
  };

  render() {
    const { items, isLoading } = this.props;
    const { image, showModal } = this.state;

    return (
      <>
        <Paginate />
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: getItems(state),
  isLoading: isPageLoading(state),
});

export default connect(mapStateToProps)(Home);
