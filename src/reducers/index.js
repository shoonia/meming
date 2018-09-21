import { combineReducers } from 'redux';

import page from './page';
import cachePages from './cachePages';
import meme from './meme';

export default combineReducers({
  page,
  cachePages,
  meme,
});
