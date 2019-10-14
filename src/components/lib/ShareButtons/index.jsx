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

function ShareButtons(props) {
  const {
    title,
    body,
    image,
    url,
  } = props;

  const defaultTitle = 'Memes about programming';
  const description = `${title.trim() || defaultTitle}\n${body}`.trim();
  const SIZE = 32;

  return (
    <div
      className={css.group}
      aria-label="share on your networks"
    >
      <TwitterShareButton
        url={url}
        title={description}
        via="_shoonia"
        className={css.button}
      >
        <TwitterIcon size={SIZE} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={url}
        title={description}
        className={css.button}
      >
        <TelegramIcon size={SIZE} round />
      </TelegramShareButton>
      <LinkedinShareButton
        url={url}
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
        url={url}
        description={description}
        className={css.button}
      >
        <PinterestIcon size={SIZE} round />
      </PinterestShareButton>
    </div>
  );
}

ShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ShareButtons;
