import React from 'react';

import Navbar from './navbar/Navbar';
import Router from './Router';
import routes from './routes';

const App = () => (
  <React.Fragment>
    <Navbar root="navbar" />
    <Router routes={routes} />
  </React.Fragment>
);

export default App;
