import React from 'react';
import PropTypes from 'prop-types';

import css from './Messenger.module.scss';

const Message = (props) => {
  const {
    id,
    type,
    message,
    remove,
  } = props;

  return (
    <div
      className={`tag block is-${type || 'info'}`}
      role="alert"
    >
      <span>
        {message}
      </span>
      <button
        type="button"
        className={css.delete}
        onClick={() => remove(id)}
        area-label="close"
      />
    </div>
  );
};

Message.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Message;
