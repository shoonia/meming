import React from 'react';

import Loadable from './Loadable';
import Navbar from './navbar/Navbar';
import Router from './Router';
import routes from './routes';

const FlashMessenger = Loadable(() => import('./aside/FlashMessenger' /* webpackChunkName: "FlashMessenger" */));
const GoogleAnalytics = Loadable(() => import('./GoogleAnalytics' /* webpackChunkName: "GoogleAnalytics" */));

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
    <FlashMessenger />
    <GoogleAnalytics trackingId="UA-128241641-1" />
  </>
);

export default App;
