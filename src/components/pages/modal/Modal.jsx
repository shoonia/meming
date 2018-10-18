import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import WrapperButton from '../helpers/WrapperButton';
import { modalStyle, ModalImage } from './modal-styled';

const Modal = ({ isOpen, colseModal, src }) => (
  <ReactModal
    isOpen={isOpen}
    style={modalStyle}
    onRequestClose={colseModal}
  >
    <figure className="has-text-centered">
      <WrapperButton
        aria-label="close"
        onClick={colseModal}
      >
        <ModalImage src={src} />
      </WrapperButton>
    </figure>
    <button
      type="button"
      className="modal-close is-large"
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

ReactModal.setAppElement('#root');

export default Modal;
