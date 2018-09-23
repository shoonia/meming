import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import { WrapperButton } from '../list/list-styled';
import { modalStyle, ModalImage } from './modal-styled';

const Modal = ({ isOpen, colseModal, image }) => (
  <div tabIndex="-1" className="modal">
    <ReactModal
      isOpen={isOpen}
      style={modalStyle}
      onRequestClose={colseModal}
      role="document"
    >
      <figure className="has-text-centered">
        <WrapperButton
          type="button"
          aria-label="close"
          onClick={colseModal}
        >
          <ModalImage src={image} alt="" />
        </WrapperButton>
      </figure>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={colseModal}
      />
    </ReactModal>
  </div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  colseModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

ReactModal.setAppElement('#root');

export default Modal;
