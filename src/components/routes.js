import Loadable from './Loadable';

const { PUBLIC_URL } = process.env;

const Home = Loadable(() => import('./pages/Home' /* webpackChunkName: "Home" */));
const Meme = Loadable(() => import('./pages/Meme' /* webpackChunkName: "Meme" */));
const Grid = Loadable(() => import('./pages/Grid' /* webpackChunkName: "Grid" */));
const NotFound = Loadable(() => import('./not-found/NotFound' /* webpackChunkName: "NotFound" */));

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
    component: Meme,
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
