import { addMessage } from '../actions/messages';

export const errorMessage = (error = {}) => addMessage({
  id: Date.now(),
  type: 'danger',
  text: error.message || 'Something went wrong!',
});

export default undefined;
