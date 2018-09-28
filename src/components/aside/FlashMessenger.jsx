import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aside from './Aside';
import Message from './Message';
import { getMessages } from '../../selectors';
import { removeMessage } from '../../actions/messages';

const FlashMessenger = ({ items, remove }) => (
  <Aside>
    {items.map(item => (
      <Message
        {...item}
        key={item.id}
        remove={remove}
      />
    ))}
  </Aside>
);

FlashMessenger.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getMessages(state),
});

const mapDispatchToProps = {
  remove: removeMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessenger);
