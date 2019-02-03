import {
  MESSAGE_ADD_ITEM,
  MESSAGE_REMOVE_BY_ID,
} from '../constants';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.message],
      };

    case MESSAGE_REMOVE_BY_ID: {
      const { id } = action;

      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    }

    default:
      return state;
  }
};
