import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectMessages } from '../../selectors';
import { removeMessageById } from '../../actions/messages';
import MessageList from './MessageList';

const FlashMessenger = ({ items, remove }) => (
  <MessageList
    items={items}
    remove={remove}
  />
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
