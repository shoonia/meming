import React from 'react';

import GoogleAnalytics from '../lib/GoogleAnalytics';
import Footer from '../Footer';

function Aside() {
  return (
    <>
      <GoogleAnalytics trackingId="UA-128241641-1" />
      <Footer root="footer" />
    </>
  );
}

export default Aside;
