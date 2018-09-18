import { GET_PAGE_BY_NUMBER, RECEIVE_PAGE } from '../constants';

export const getPageByNumber = pageNumber => ({
  type: GET_PAGE_BY_NUMBER,
  pageNumber,
});

export const receivePage = payload => ({
  type: RECEIVE_PAGE,
  payload,
});
