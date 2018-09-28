import React from 'react';

import Navbar from './navbar/Navbar';
import FlashMessenger from './aside/FlashMessenger';
import Router from './Router';
import routes from './routes';

const App = () => (
  <>
    <Navbar root="navbar" />
    <Router routes={routes} />
    <FlashMessenger />
  </>
);

export default App;
