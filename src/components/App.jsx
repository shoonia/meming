import React from 'react';

import Navbar from './navbar/Navbar';
import Router from './Router';
import routes from './routes';

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
  </>
);

export default App;
