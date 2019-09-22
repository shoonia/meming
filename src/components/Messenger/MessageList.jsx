import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import css from './Messenger.module.scss';

const MessageList = ({ items, remove }) => (
  <aside className={css.wrapper}>
    {items.map((item) => (
      <Message
        {...item}
        key={item.id}
        remove={remove}
      />
    ))}
  </aside>
);

MessageList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default MessageList;
