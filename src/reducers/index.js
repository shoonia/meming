import { combineReducers } from 'redux';

import list from './list';
import cachePages from './cachePages';
import meme from './meme';
import messages from './messages';

export default combineReducers({
  list,
  cachePages,
  meme,
  messages,
});
