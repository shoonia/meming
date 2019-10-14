import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class GoogleAnalytics extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pathname: '',
    };
  }

  componentDidMount() {
    const { trackingId, history, location } = this.props;

    if (process.env.NODE_ENV === 'development') {
      return;
    }

    ReactGA.initialize(trackingId);
    this.historyListener(location);
    history.listen(this.historyListener);
  }

  historyListener = ({ pathname }) => {
    const { state } = this;

    if (state.pathname !== pathname) {
      ReactGA.pageview(pathname);
      this.setState({ pathname });
    }
  };

  render() {
    return null;
  }
}

GoogleAnalytics.propTypes = {
  trackingId: PropTypes.string.isRequired,
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(GoogleAnalytics);
