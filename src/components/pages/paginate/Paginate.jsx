import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import { ROOT_URL } from '../../../constants';

class Paginate extends React.PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    historyPush: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  onPageChange = ({ selected }) => {
    const { historyPush, onPageChange } = this.props;
    const nextPage = selected + 1;

    onPageChange(nextPage);
    historyPush(`${ROOT_URL}/page/${nextPage}`);
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
          onPageChange={this.onPageChange}

          pageRangeDisplayed={1}
          marginPagesDisplayed={1}

          containerClassName="pagination-list"
          pageLinkClassName="pagination-link"
          // pageClassName=""
          // activeClassName=""
          // disabledClassName=""

          // previousClassName=""
          // nextClassName=""

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
