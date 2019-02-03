import React from 'react';
import PropTypes from 'prop-types';

import Time from '../pages/helpers/Time';
import Button from '../pages/helpers/Button';
import ShareButtons from '../pages/helpers/ShareButtons';
import css from './MemePage.module.scss';

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
    <main className={css.wrapper}>
      <h1 className={css.title}>
        {title}
      </h1>
      <figure className={css.content}>
        <img {...image} alt={title} />
        <figcaption>{body}</figcaption>
        <Time date={date} />
      </figure>
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
