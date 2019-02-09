import React from 'react';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getNumberOfPage,
  selectListPageCount,
} from '../../selectors';
import { getPageByNumber } from '../../actions/list';
import Icon from '../lib/Icon';
import css from './Paginate.module.scss';

const { PUBLIC_URL } = process.env;

class Paginate extends React.Component {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('popstate', this.goNextPage);
  }

  shouldComponentUpdate(nextProps) {
    const { pageCount, pageNumber } = this.props;

    return nextProps.pageNumber !== pageNumber
      || nextProps.pageCount !== pageCount;
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.goNextPage);
  }

  goNextPage = () => {
    const { pageNumber, onPageChange } = this.props;
    onPageChange(pageNumber);
  };

  hrefBuilder = pageNumber => `${PUBLIC_URL}/page/${pageNumber}`;

  onPageChangeHandler = ({ selected }) => {
    const { history, onPageChange, pageCount } = this.props;
    const nextPage = this.calculateNextPage((selected + 1), pageCount);

    onPageChange(nextPage);
    history.push(this.hrefBuilder(nextPage));
  }

  calculateNextPage = (selected, count) => {
    if (count > 0) {
      return (selected > count) ? count : selected;
    }
    return selected;
  }

  render() {
    const { pageCount, pageNumber } = this.props;
    const initialPage = (pageNumber < 1) ? 0 : (pageNumber - 1);

    return (
      <nav aria-label="page navigation">
        <ReactPaginate
          pageCount={pageCount}
          forcePage={initialPage}
          initialPage={initialPage}
          onPageChange={this.onPageChangeHandler}
          hrefBuilder={this.hrefBuilder}

          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          // extraAriaContext={`of ${pageCount}`}

          containerClassName={css.list}
          pageLinkClassName={css.link}

          pageClassName={css.item}
          activeClassName={css.active}
          disabledClassName={css.disabled}

          previousClassName={css.arrow}
          previousLinkClassName={css.link}
          previousLabel={(
            <Icon
              type="chevron-left"
              aria-label="previous page"
            />
          )}

          nextClassName={css.arrow}
          nextLinkClassName={css.link}
          nextLabel={(
            <Icon
              type="chevron-right"
              aria-label="next page"
            />
          )}

          breakClassName={css.break}
          breakLabel={(
            <span role="presentation">
              &hellip;
            </span>
          )}
        />
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  pageCount: selectListPageCount(state),
  pageNumber: getNumberOfPage(ownProps),
});

const mapDispatchToProps = {
  onPageChange: getPageByNumber,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Paginate));
