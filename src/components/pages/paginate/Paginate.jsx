import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import './paginate.css';

const { PUBLIC_URL } = process.env;

class Paginate extends React.PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    historyPush: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  /* eslint no-nested-ternary: off */
  onPageChangeHandler = ({ selected }) => {
    const { historyPush, onPageChange, pageCount } = this.props;
    const page = selected + 1;
    const nextPage = (pageCount > 0)
      ? (page > pageCount) ? pageCount : page
      : page;

    onPageChange(nextPage);
    historyPush(`${PUBLIC_URL}/page/${nextPage}`);
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

export default Paginate;
