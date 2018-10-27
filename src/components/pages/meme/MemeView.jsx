import React from 'react';
import PropTypes from 'prop-types';

import Time from '../helpers/Time';
import Button from '../helpers/Button';
import ShareButtons from '../helpers/ShareButtons';
import { Figure } from './meme-styled';

const MemeView = (props) => {
  const {
    title,
    image,
    body,
    date,
    onClick,
  } = props;
  const desc = `${title.trim() || 'Meming'}.\n${body}`.trim();

  return (
    <main className="has-text-centered">
      <h1 className="title is-4">{title}</h1>
      <Figure>
        <img {...image} alt={title} />
        <p>{body}</p>
        <Time date={date} />
      </Figure>
      <ShareButtons title={desc} />
      <Button onClick={onClick}>
        <span className="icomoon icon-arrow-back" role="presentation" />
        &nbsp;Go Back
      </Button>
    </main>
  );
};

MemeView.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MemeView;
