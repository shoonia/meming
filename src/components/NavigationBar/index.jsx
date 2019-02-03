import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getPageNumber,
  getPageCount,
  getPageLength,
  isPageLoading,
} from '../../selectors';
import { getPageByNumber } from '../../actions/list';
import NavigationBarView from './NavigationBarView';

const { PUBLIC_URL } = process.env;

class NavigationBar extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageLength: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  goNextPage = page => () => {
    const { pageNumber, history, onPageChange } = this.props;
    const nextPage = pageNumber + page;

    onPageChange(nextPage);
    window.scrollTo({ top: 0 });
    history.push(`${PUBLIC_URL}/page/${nextPage}`);
  };

  goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const {
      pageNumber,
      pageCount,
      pageLength,
      isLoading,
    } = this.props;

    return (
      <NavigationBarView
        goTop={this.goTop}
        goNextPage={this.goNextPage}
        prevDisabled={pageNumber <= 1}
        nextDisabled={pageNumber >= pageCount}
        hidden={pageLength < 1 || isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  pageNumber: getPageNumber(state),
  pageCount: getPageCount(state),
  pageLength: getPageLength(state),
  isLoading: isPageLoading(state),
});

const mapDispatchToProps = {
  onPageChange: getPageByNumber,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
