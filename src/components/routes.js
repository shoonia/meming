import Loadable from './lib/Loadable';
import { PUBLIC_URL } from '../constants';

const HomePage = Loadable(() => import('./HomePage' /* webpackChunkName: "HomePage" */));
const MemePage = Loadable(() => import('./MemePage' /* webpackChunkName: "MemePage" */));
const GridPage = Loadable(() => import('./GridPage' /* webpackChunkName: "GridPage" */));
const NotFound = Loadable(() => import('./NotFound' /* webpackChunkName: "NotFound" */));

export default [
  {
    path: `${PUBLIC_URL}/`,
    exact: true,
    component: HomePage,
  },
  {
    path: `${PUBLIC_URL}/index.html`,
    exact: true,
    component: HomePage,
  },
  {
    path: `${PUBLIC_URL}/page/:number`,
    exact: true,
    component: HomePage,
  },
  {
    path: `${PUBLIC_URL}/post/:id`,
    exact: true,
    component: MemePage,
  },
  {
    path: `${PUBLIC_URL}/grid`,
    exact: true,
    component: GridPage,
  },
  {
    path: '*',
    component: NotFound,
  },
];
