import {
  MESSAGE_ADD_ITEM,
  MESSAGE_REMOVE_BY_ID,
} from '../constants';

export const addMessage = message => ({
  type: MESSAGE_ADD_ITEM,
  message,
});

export const removeMessageById = id => ({
  type: MESSAGE_REMOVE_BY_ID,
  id,
});
