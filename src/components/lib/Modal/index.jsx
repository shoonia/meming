import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import css from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, colseModal, src }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={colseModal}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <figure
      className={css.wrapper}
    >
      <img
        src={src}
        alt="meme"
        className={css.image}
      />
    </figure>
    <button
      type="button"
      className={css.close}
      aria-label="close"
      onClick={colseModal}
    />
  </ReactModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  colseModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default Modal;
