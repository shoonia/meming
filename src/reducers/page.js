import { RECEIVE_PAGE } from '../constants';

const initialState = {
  totalCount: 0,
  pageCount: 0,
  pageNumber: 0,
  limit: 0,
  length: 0,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PAGE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
