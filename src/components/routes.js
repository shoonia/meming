import Home from './pages/Home';
import NotFound from './not-found/NotFound';

import { ROOT_URL } from '../constants';

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
    path: '*',
    component: NotFound,
  },
];
