import Loadable from 'react-loadable';

import { ROOT_URL } from '../constants';

const loading = () => null;

const Home = Loadable({
  loader: () => import('./pages/Home' /* webpackChunkName: "Home" */),
  loading,
});

const Meme = Loadable({
  loader: () => import('./pages/Meme' /* webpackChunkName: "Meme" */),
  loading,
});

const NotFound = Loadable({
  loader: () => import('./not-found/NotFound' /* webpackChunkName: "NotFound" */),
  loading,
});

export default [
  {
    path: `${ROOT_URL}/`,
    exact: true,
    component: Home,
  },
  {
    path: `${ROOT_URL}/page/:number`,
    exact: true,
    component: Home,
  },
  {
    path: `${ROOT_URL}/post/:id`,
    exact: true,
    component: Meme,
  },
  {
    path: '*',
    component: NotFound,
  },
];
