import React from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  selectListItems,
  selectListPageNumber,
  selectListPageCount,
  selectIsListLoading,
} from '../../selectors';
import { getPageByNumber } from '../../actions/list';
import GridList from './GridList';
import GridButton from './GridButton';

const masonryOptions = {
  gutter: 10,
};

class Grid extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line
    getPage: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isLoading || state.isFirst) {
      return null;
    }

    return {
      items: [...state.items, ...props.items],
    };
  }

  state = {
    isFirst: true, // eslint-disable-line
    items: [],
  };

  componentDidMount() {
    const { getPage } = this.props;

    this.setState({ isFirst: false }); // eslint-disable-line
    getPage(1);
  }

  loadMore = () => {
    const { pageCount, pageNumber, getPage } = this.props;

    if (pageNumber < pageCount) {
      getPage(pageNumber + 1);
    }
  };

  render() {
    const { items } = this.state;
    const { isLoading, pageCount, pageNumber } = this.props;
    const disabled = isLoading || (pageNumber + 1 > pageCount);

    return (
      <>
        <Masonry
          elementType="main"
          options={masonryOptions}
        // className=""
        // disableImagesLoaded={false} // default false
        // updateOnEachImageLoad={false}
        // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          <GridList items={items} />
        </Masonry>
        <GridButton
          onClick={this.loadMore}
          loading={isLoading}
          disabled={disabled}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: selectListItems(state),
  pageNumber: selectListPageNumber(state),
  pageCount: selectListPageCount(state),
  isLoading: selectIsListLoading(state),
});

const mapDispatchToProps = {
  getPage: getPageByNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
