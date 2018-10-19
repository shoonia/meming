import { GET_MEME_BY_ID, RECEIVE_MEME, MEME_LOADING } from '../constants';

export const getMemeById = id => ({
  type: GET_MEME_BY_ID,
  id,
});

export const receiveMeme = meme => ({
  type: RECEIVE_MEME,
  meme,
});

export const memeLoading = () => ({
  type: MEME_LOADING,
});
