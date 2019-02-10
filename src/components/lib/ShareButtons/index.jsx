import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterShareButton,
  TwitterIcon,

  TelegramShareButton,
  TelegramIcon,

  PinterestShareButton,
  PinterestIcon,

  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

import css from './ShareButtons.module.scss';

const ShareButtons = ({ title, body, image }) => {
  const { href } = document.location;
  const defaultTitle = 'Memes about programming';
  const description = `${title.trim() || defaultTitle}\n${body}`.trim();
  const SIZE = 32;

  return (
    <div className={css.group}>
      <TwitterShareButton
        url={href}
        title={description}
        via="_shoonia"
        className={css.button}
      >
        <TwitterIcon size={SIZE} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={href}
        title={description}
        className={css.button}
      >
        <TelegramIcon size={SIZE} round />
      </TelegramShareButton>
      <LinkedinShareButton
        url={href}
        title={title || defaultTitle}
        description={body || ''}
        windowWidth={750}
        windowHeight={600}
        className={css.button}
      >
        <LinkedinIcon size={SIZE} round />
      </LinkedinShareButton>
      <PinterestShareButton
        media={image}
        url={href}
        description={description}
        className={css.button}
      >
        <PinterestIcon size={SIZE} round />
      </PinterestShareButton>
    </div>
  );
};

ShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShareButtons;
