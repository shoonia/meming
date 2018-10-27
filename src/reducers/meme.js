import {
  RECEIVE_MEME,
  MEME_LOADING,
  MEME_LOAD_END,
  CLEAR_MEME,
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
    case RECEIVE_MEME:
      return {
        ...state,
        isExist: true,
        hasError: false,
        item: action.meme,
      };

    case CLEAR_MEME:
      return {
        ...initialState,
      };

    case MEME_LOADING:
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
