import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ id, message, remove }) => (
  <div>
    <span>{message}</span>
    <button type="button" onClick={() => remove(id)}>
      &times;
    </button>
  </div>
);

Message.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Message;
