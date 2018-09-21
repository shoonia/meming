import Home from './pages/Home';
import Meme from './pages/Meme';
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
    path: `${ROOT_URL}/meme/:id`,
    exact: true,
    component: Meme,
  },
  {
    path: '*',
    component: NotFound,
  },
];
