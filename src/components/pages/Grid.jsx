import React from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getItems } from '../../selectors';
import { getPageByNumber } from '../../actions/page';
import GridItem from './grid/GridItem';

const masonryOptions = {
  gutter: 10,
};

class Grid extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    getPage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getPage } = this.props;
    getPage(1);
  }

  renderItems = () => {
    const { items } = this.props;

    return items.map(item => (
      <GridItem key={item.id}>
        <img src={item.image} alt={item.title} />
      </GridItem>
    ));
  };

  render() {
    return (
      <Masonry
        elementType="main"
        options={masonryOptions}
      // className=""
      // disableImagesLoaded={false} // default false
      // updateOnEachImageLoad={false}
      // imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {this.renderItems()}
      </Masonry>
    );
  }
}

const mapStateToProps = state => ({
  items: getItems(state),
});

const mapDispatchToProps = {
  getPage: getPageByNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
