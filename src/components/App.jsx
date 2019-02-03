import React from 'react';

import Loadable from './lib/Loadable';
import Navbar from './Navbar';
import Router from './Router';
import routes from './routes';

const Aside = Loadable(() => import('./aside' /* webpackChunkName: "Aside" */));

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
    <Aside />
  </>
);

export default App;
