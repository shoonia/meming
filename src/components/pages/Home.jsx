import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems, getNumberOfPage, getPageCount } from '../../selectors';
import { getPageByNumber } from '../../actions/page';
import Paginate from './paginate/Paginate';
import List from './list/List';

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
  };

  render() {
    const {
      history,
      pageNumber,
      pageCount,
      getPage,
      items,
    } = this.props;

    return (
      <React.Fragment>
        <Paginate
          pageCount={pageCount}
          pageNumber={pageNumber}
          historyPush={history.push}
          onPageChange={getPage}
        />
        <List items={items} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  items: getItems(state),
  pageCount: getPageCount(state),
  pageNumber: getNumberOfPage(ownProps),
});

const mapDispatchToProps = {
  getPage: getPageByNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
