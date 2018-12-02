import React from 'react';

import Loadable from './Loadable';
import Navbar from './navbar/Navbar';
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
