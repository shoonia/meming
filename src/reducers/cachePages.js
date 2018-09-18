import { CACHE_PAGE } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CACHE_PAGE: {
      return {
        ...state,
        ...action.pages,
      };
    }
    default:
      return state;
  }
};
