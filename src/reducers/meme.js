import { RECEIVE_MEME } from '../constants';

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

    default:
      return state;
  }
};
