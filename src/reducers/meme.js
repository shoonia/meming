import {
  MEME_RECEIVE_PAGE,
  MEME_LOAD_START,
  MEME_LOAD_END,
  MEME_CLEAR_PAGE,
  MEME_HAS_ERROR,
} from '../constants';

const initialState = {
  isExist: false,
  isLoading: false,
  hasError: false,
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MEME_RECEIVE_PAGE:
      return {
        ...state,
        isExist: true,
        hasError: false,
        item: action.meme,
      };

    case MEME_CLEAR_PAGE:
      return {
        ...initialState,
      };

    case MEME_LOAD_START:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };

    case MEME_LOAD_END:
      return {
        ...state,
        isLoading: false,
      };

    case MEME_HAS_ERROR:
      return {
        ...state,
        hasError: true,
      };

    default:
      return state;
  }
};
