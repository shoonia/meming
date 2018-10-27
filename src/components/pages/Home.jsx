import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, isPageLoading } from '../../selectors';
import { hideScroll } from '../../utils/home';
import Paginate from './paginate/Paginate';
import List from './list/List';
import Modal from './modal/Modal';
import NavigationBar from './navigation-bar/NavigationBar';

class Home extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
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
    // Close modal window on `popstate` event
    // ("back" button on the mobile)
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
    const { items, isLoading } = this.props;
    const { src, showModal } = this.state;

    return (
      <>
        <Paginate />
        <List
          items={items}
          isLoading={isLoading}
          openModal={this.handleOpenModal}
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
  items: getItems(state),
  isLoading: isPageLoading(state),
});

export default connect(mapStateToProps)(Home);
