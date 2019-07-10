import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectMessages } from '../../selectors';
import { removeMessageById } from '../../actions/messages';
import MessageList from './MessageList';

function FlashMessenger() {
  const dispatch = useDispatch();
  const items = useSelector(selectMessages);

  const remove = id => dispatch(removeMessageById(id));

  return (
    <MessageList
      items={items}
      remove={remove}
    />
  );
}

export default FlashMessenger;
