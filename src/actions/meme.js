import {
  MEME_GET_PAGE_BY_ID,
  MEME_RECEIVE_PAGE,
  MEME_LOAD_START,
  MEME_LOAD_END,
  MEME_CLEAR_PAGE,
  MEME_HAS_ERROR,
} from '../constants';

export const getMemePageById = id => ({
  type: MEME_GET_PAGE_BY_ID,
  id,
});

export const receivePage = meme => ({
  type: MEME_RECEIVE_PAGE,
  meme,
});

export const clearPage = () => ({
  type: MEME_CLEAR_PAGE,
});

export const loadPageStart = () => ({
  type: MEME_LOAD_START,
});

export const loadPageEnd = () => ({
  type: MEME_LOAD_END,
});

export const memeHasError = () => ({
  type: MEME_HAS_ERROR,
});
