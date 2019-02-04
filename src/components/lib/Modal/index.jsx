import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import css from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, close, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={close}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    {children}
    <button
      type="button"
      className={css.close}
      aria-label="close"
      onClick={close}
    />
  </ReactModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
