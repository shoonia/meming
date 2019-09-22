import React from 'react';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';

const Router = ({ routes }) => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);

Router.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      component: PropTypes.func,
      render: PropTypes.func,
    }).isRequired,
  ).isRequired,
};

export default Router;
