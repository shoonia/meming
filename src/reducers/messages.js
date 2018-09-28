import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        items: [...state.items, action.message],
      };

    case REMOVE_MESSAGE: {
      const { id } = action;
      const items = state.items.filter(item => item.id !== id);
      return {
        ...state,
        items,
      };
    }

    default:
      return state;
  }
};
