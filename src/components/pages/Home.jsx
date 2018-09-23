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

  backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
        />
        <GoBackButton
          onClick={this.backToTop}
          hidden={isLoading || items.length <= 1}
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
