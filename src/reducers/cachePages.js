import { CACHE_PAGES_ADD_PAGE } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CACHE_PAGES_ADD_PAGE: {
      return {
        ...state,
        ...action.pages,
      };
    }
    default:
      return state;
  }
};
