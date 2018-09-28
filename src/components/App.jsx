import React from 'react';
import Loadable from 'react-loadable';

import Navbar from './navbar/Navbar';
import Router from './Router';
import routes, { loading } from './routes';

const FlashMessenger = Loadable({
  loader: () => import('./aside/FlashMessenger' /* webpackChunkName: "FlashMessenger" */),
  loading,
});

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
    <FlashMessenger />
  </>
);

export default App;
