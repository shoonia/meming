import React from 'react';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getItems,
  getNumberOfPage,
  getPageCount,
} from '../../../selectors';
import { getPageByNumber } from '../../../actions/page';
import './paginate.scss';

const { PUBLIC_URL } = process.env;

class Paginate extends React.PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('popstate', this.goNextPage);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.goNextPage);
  }

  goNextPage = () => {
    const { pageNumber, onPageChange } = this.props;
    onPageChange(pageNumber);
  };

  /* eslint no-nested-ternary: off */
  onPageChangeHandler = ({ selected }) => {
    const { history, onPageChange, pageCount } = this.props;
    const page = selected + 1;
    const nextPage = (pageCount > 0)
      ? (page > pageCount) ? pageCount : page
      : page;

    onPageChange(nextPage);
    history.push(`${PUBLIC_URL}/page/${nextPage}`);
  }

  render() {
    const { pageCount, pageNumber } = this.props;
    const initialPage = (pageNumber < 1) ? 0 : (pageNumber - 1);

    return (
      <nav className="pagination is-rounded is-centered">
        <ReactPaginate
          pageCount={pageCount}
          forcePage={initialPage}
          initialPage={initialPage}
          onPageChange={this.onPageChangeHandler}

          pageRangeDisplayed={1}
          marginPagesDisplayed={1}

          containerClassName="pagination-list"
          pageLinkClassName="pagination-link"

          pageClassName="pagination__item"
          activeClassName="pagination__active"
          disabledClassName="pagination__disabled"

          previousClassName="pagination__item"
          nextClassName="pagination__item"

          previousLabel="&laquo;"
          nextLabel="&raquo;"
          breakLabel="&hellip;"

          previousLinkClassName="pagination-previous"
          nextLinkClassName="pagination-next"
          breakClassName="pagination-ellipsis"
        />
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  items: getItems(state),
  pageCount: getPageCount(state),
  pageNumber: getNumberOfPage(ownProps),
});

const mapDispatchToProps = {
  onPageChange: getPageByNumber,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Paginate));
