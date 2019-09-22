import { CACHE_PAGES_ADD_PAGE } from '../constants';

export const addPageToCache = (pages) => ({
  type: CACHE_PAGES_ADD_PAGE,
  pages,
});

export default null;
