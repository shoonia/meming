import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../lib/Modal';
import Image from '../lib/Image';
import css from './Home.module.scss';

const HomeModal = ({ isOpen, close, src }) => (
  <Modal
    isOpen={isOpen}
    close={close}
  >
    <figure
      className={css.wrapper}
    >
      <Image
        src={src}
        alt="meme"
        className={css.image}
      />
    </figure>
  </Modal>
);

HomeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default HomeModal;
