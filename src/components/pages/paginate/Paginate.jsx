import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import { ROOT_URL } from '../../../constants';

class Paginate extends React.PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    initialPage: PropTypes.number.isRequired,
    historyPush: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  onPageChange = ({ selected }) => {
    const { historyPush, onPageChange } = this.props;
    const pageNumber = selected + 1;

    onPageChange(pageNumber);
    historyPush(`${ROOT_URL}/page/${pageNumber}`);
  }

  render() {
    const { pageCount, initialPage } = this.props;

    return (
      <nav className="pagination is-rounded is-centered">
        <ReactPaginate
          pageCount={pageCount}
          // forcePage={index - 1}
          initialPage={(initialPage < 1) ? 0 : (initialPage - 1)}
          onPageChange={this.onPageChange}

          pageRangeDisplayed={2}
          marginPagesDisplayed={1}

          containerClassName="pagination-list"
          pageLinkClassName="button is-white"
          pageClassName="pagination-link"
          activeClassName="is-current"
          disabledClassName=""

          previousClassName=""
          nextClassName=""

          previousLabel={<span>&laquo;</span>}
          nextLabel={<span>&raquo;</span>}

          previousLinkClassName="pagination-previous"
          nextLinkClassName="pagination-next"

          breakClassName=""
          breakLabel={<span className="pagination-ellipsis">...</span>}
        />
      </nav>
    );
  }
}

export default Paginate;
