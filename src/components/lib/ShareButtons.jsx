import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterShareButton,
  TwitterIcon,

  TelegramShareButton,
  TelegramIcon,

  LinkedinShareButton,
  LinkedinIcon,

  GooglePlusShareButton,
  GooglePlusIcon,

} from 'react-share';

const ShareButtons = ({ title }) => {
  const { href } = document.location;
  const description = 'Memes about programming';

  return (
    <div className="section">
      <div className="field is-grouped">
        <TwitterShareButton
          url={href}
          title={title}
          className="button is-text"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <TelegramShareButton
          url={href}
          title={title}
          via="@_shoonia"
          className="button is-text"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <LinkedinShareButton
          url={href}
          title={title}
          description={description}
          windowWidth={750}
          windowHeight={600}
          className="button is-text"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <GooglePlusShareButton
          url={href}
          className="button is-text"
        >
          <GooglePlusIcon size={32} round />
        </GooglePlusShareButton>
      </div>
    </div>
  );
};

ShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ShareButtons;
