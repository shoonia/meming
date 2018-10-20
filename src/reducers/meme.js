import {
  RECEIVE_MEME,
  MEME_LOADING,
  MEME_LOAD_END,
  CLEAR_MEME,
} from '../constants';

const initialState = {
  isExist: false,
  isLoading: false,
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MEME:
      return {
        ...state,
        isExist: true,
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
      };

    case MEME_LOAD_END:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
