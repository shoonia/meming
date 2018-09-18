import { combineReducers } from 'redux';

import page from './page';
import cachePages from './cachePages';

export default combineReducers({
  page,
  cachePages,
});
