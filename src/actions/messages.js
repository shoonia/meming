import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants';

export const addMessage = message => ({
  type: ADD_MESSAGE,
  message,
});

export const removeMessage = id => ({
  type: REMOVE_MESSAGE,
  id,
});

export const errorMessage = error => addMessage({
  id: Date.now(),
  type: 'danger',
  message: error.message || 'Something went wrong!',
});
