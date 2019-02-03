import {
  LIST_GET_PAGE_BY_NUMBER,
  LIST_RECEIVE_PAGE,
  LIST_PAGE_LOADING,
} from '../constants';

export const getPageByNumber = pageNumber => ({
  type: LIST_GET_PAGE_BY_NUMBER,
  pageNumber,
});

export const receivePage = payload => ({
  type: LIST_RECEIVE_PAGE,
  payload,
});

export const pageLoading = () => ({
  type: LIST_PAGE_LOADING,
});
