export const GET_PAGE_BY_NUMBER = 'GET_PAGE_BY_NUMBER';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';
export const CACHE_PAGE = 'CACHE_PAGE';

export const ROOT_URL = (process.env.NODE_ENV === 'production')
  ? '/meme'
  : '';

export const GET_MEME_BY_ID = 'GET_MEME_BY_ID';
export const RECEIVE_MEME = 'RECEIVE_MEME';
