import Loadable from './lib/Loadable';

const { PUBLIC_URL } = process.env;

const Home = Loadable(() => import('./pages/Home' /* webpackChunkName: "Home" */));
const MemePage = Loadable(() => import('./MemePage' /* webpackChunkName: "MemePage" */));
const Grid = Loadable(() => import('./pages/Grid' /* webpackChunkName: "Grid" */));
const NotFound = Loadable(() => import('./NotFound' /* webpackChunkName: "NotFound" */));

export default [
  {
    path: `${PUBLIC_URL}/`,
    exact: true,
    component: Home,
  },
  {
    path: `${PUBLIC_URL}/index.html`,
    exact: true,
    component: Home,
  },
  {
    path: `${PUBLIC_URL}/page/:number`,
    exact: true,
    component: Home,
  },
  {
    path: `${PUBLIC_URL}/post/:id`,
    exact: true,
    component: MemePage,
  },
  {
    path: `${PUBLIC_URL}/grid`,
    exact: true,
    component: Grid,
  },
  {
    path: '*',
    component: NotFound,
  },
];
