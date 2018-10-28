import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home' /* webpackChunkName: "Home" */));
const Meme = lazy(() => import('./pages/Meme' /* webpackChunkName: "Meme" */));
const Grid = lazy(() => import('./pages/Grid' /* webpackChunkName: "Grid" */));
const NotFound = lazy(() => import('./not-found/NotFound' /* webpackChunkName: "NotFound" */));

const { PUBLIC_URL } = process.env;

const getComponent = Component => props => (
  <Suspense fallback={null}>
    <Component {...props} />
  </Suspense>
);

export default [
  {
    path: `${PUBLIC_URL}/`,
    exact: true,
    component: getComponent(Home),
  },
  {
    path: `${PUBLIC_URL}/index.html`,
    exact: true,
    component: getComponent(Home),
  },
  {
    path: `${PUBLIC_URL}/page/:number`,
    exact: true,
    component: getComponent(Home),
  },
  {
    path: `${PUBLIC_URL}/post/:id`,
    exact: true,
    component: getComponent(Meme),
  },
  {
    path: `${PUBLIC_URL}/grid`,
    exact: true,
    component: getComponent(Grid),
  },
  {
    path: '*',
    component: getComponent(NotFound),
  },
];
