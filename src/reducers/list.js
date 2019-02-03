import {
  LIST_RECEIVE_PAGE,
  LIST_PAGE_LOADING,
} from '../constants';

const initialState = {
  items: [],
  length: 0,
  // limit: 0,
  pageNumber: 0,
  pageCount: 0,
  // totalCount: 0,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST_RECEIVE_PAGE:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case LIST_PAGE_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
