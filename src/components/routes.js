import Loadable from 'react-loadable';

const loading = () => null;
const { PUBLIC_URL } = process.env;

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
    path: '*',
    component: NotFound,
  },
];
