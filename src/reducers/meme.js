import { RECEIVE_MEME, MEME_LOADING } from '../constants';

const initialState = {
  isExist: false,
  error: false,
  loading: false,
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MEME:
      return {
        isExist: true,
        error: false,
        loading: false,
        item: action.meme,
      };

    case MEME_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
