import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../lib/Modal';
import Image from '../lib/Image';
import Loadable from '../lib/Loadable';
import css from './Home.module.scss';

const ShareButtons = Loadable(() => import('../lib/ShareButtons' /* webpackChunkName: "ShareButtons" */));

const HomeModal = ({ isOpen, close, item }) => (
  <Modal
    isOpen={isOpen}
    close={close}
  >
    <figure
      className={css.wrapper}
    >
      <Image
        src={item.src}
        alt="meme"
        className={css.image}
      />
    </figure>
    <div className={css.share}>
      <ShareButtons
        title={item.title}
        body={item.body}
        image={item.src}
        url={`${document.location.origin}/post/${item.id}`}
      />
    </div>
  </Modal>
);

HomeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeModal;
