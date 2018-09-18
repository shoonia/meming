import Home from './pages/Home';
import NotFound from './not-found/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/page/:number',
    exact: true,
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];
