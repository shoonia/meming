import React, { Suspense, lazy } from 'react';

import Navbar from './navbar/Navbar';
import Router from './Router';
import routes from './routes';

const FlashMessenger = lazy(() => import('./aside/FlashMessenger' /* webpackChunkName: "FlashMessenger" */));
const GoogleAnalytics = lazy(() => import('./GoogleAnalytics' /* webpackChunkName: "GoogleAnalytics" */));

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
    <Suspense fallback={null}>
      <FlashMessenger />
    </Suspense>
    <Suspense fallback={null}>
      <GoogleAnalytics trackingId="UA-128241641-1" />
    </Suspense>
  </>
);

export default App;
