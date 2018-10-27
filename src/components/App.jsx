import React, { Suspense, lazy } from 'react';

import Navbar from './navbar/Navbar';
import Router from './Router';
import routes from './routes';

const FlashMessenger = lazy(() => import('./aside/FlashMessenger' /* webpackChunkName: "FlashMessenger" */));

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
    <Suspense fallback={null}>
      <FlashMessenger />
    </Suspense>
  </>
);

export default App;
