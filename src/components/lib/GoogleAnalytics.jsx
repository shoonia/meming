import { useEffect } from 'react';
import ga from 'react-ga';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function GoogleAnalytics({ trackingId }) {
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  const { pathname } = useLocation();

  useEffect(() => {
    ga.initialize(trackingId);
  }, []);

  useEffect(() => {
    ga.pageview(pathname);
  }, [pathname]);

  return null;
}

GoogleAnalytics.propTypes = {
  trackingId: PropTypes.string.isRequired,
};

export default GoogleAnalytics;
