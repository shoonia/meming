import React from 'react';

import Router from './Router';
import routes from './routes';

const App = () => (
  <React.Fragment>
    <Router routes={routes} />
  </React.Fragment>
);

export default App;
