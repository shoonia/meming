import React from 'react';

import GoogleAnalytics from '../lib/GoogleAnalytics';
import FlashMessenger from '../Messenger';
import Footer from '../Footer';

const Aside = () => (
  <>
    <FlashMessenger />
    <GoogleAnalytics trackingId="UA-128241641-1" />
    <Footer root="footer" />
  </>
);

export default Aside;
