import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Message from './Message';
import { selectMessages } from '../../selectors';
import { removeMessageById } from '../../actions/messages';
import css from './Messenger.module.scss';

const FlashMessenger = ({ items, remove }) => (
  <aside className={css.wrapper}>
    {items.map(item => (
      <Message
        {...item}
        key={item.id}
        remove={remove}
      />
    ))}
  </aside>
);

FlashMessenger.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: selectMessages(state),
});

const mapDispatchToProps = {
  remove: removeMessageById,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessenger);
