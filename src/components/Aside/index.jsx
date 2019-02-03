import React from 'react';

import GoogleAnalytics from '../lib/GoogleAnalytics';
import FlashMessenger from '../Messenger';

const Aside = () => (
  <>
    <FlashMessenger />
    <GoogleAnalytics trackingId="UA-128241641-1" />
  </>
);

export default Aside;
