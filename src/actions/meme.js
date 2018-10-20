import {
  GET_MEME_BY_ID,
  RECEIVE_MEME,
  MEME_LOADING,
  MEME_LOAD_END,
  CLEAR_MEME,
} from '../constants';

export const getMemeById = id => ({
  type: GET_MEME_BY_ID,
  id,
});

export const receiveMeme = meme => ({
  type: RECEIVE_MEME,
  meme,
});

export const clearMeme = () => ({
  type: CLEAR_MEME,
});

export const memeLoading = () => ({
  type: MEME_LOADING,
});

export const memeLoadEnd = () => ({
  type: MEME_LOAD_END,
});
