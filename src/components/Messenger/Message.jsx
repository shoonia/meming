import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';

import css from './Messenger.module.scss';

const styles = cn.bind(css);

function Message(props) {
  const {
    id,
    type,
    text,
    remove,
  } = props;

  const removeById = () => remove(id);

  return (
    <div
      className={styles(type)}
      role="status"
    >
      <span>
        {text}
      </span>
      <button
        type="button"
        className={css.delete}
        onClick={removeById}
        aria-label="close"
      />
    </div>
  );
}

Message.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Message;
