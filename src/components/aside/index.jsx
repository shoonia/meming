import React from 'react';

import GoogleAnalytics from './GoogleAnalytics';
import FlashMessenger from '../messenger';

const Aside = () => (
  <>
    <FlashMessenger />
    <GoogleAnalytics trackingId="UA-128241641-1" />
  </>
);

export default Aside;
