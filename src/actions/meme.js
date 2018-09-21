import { GET_MEME_BY_ID, RECEIVE_MEME } from '../constants';

export const getMemeById = id => ({
  type: GET_MEME_BY_ID,
  id,
});

export const receiveMeme = meme => ({
  type: RECEIVE_MEME,
  meme,
});
