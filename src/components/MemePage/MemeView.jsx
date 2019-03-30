import React from 'react';
import PropTypes from 'prop-types';

import Time from '../lib/Time';
import Button from '../lib/Button';
import Loadable from '../lib/Loadable';
import Icon from '../lib/Icon';
import Image from '../lib/Image';
import css from './MemePage.module.scss';

const ShareButtons = Loadable(() => import('../lib/ShareButtons' /* webpackChunkName: "ShareButtons" */));

const MemeView = (props) => {
  const {
    title,
    image,
    body,
    date,
    onClick,
  } = props;

  return (
    <main className={css.wrapper}>
      <h1 className={css.title}>
        {title}
      </h1>
      <figure className={css.content}>
        <Image
          {...image}
          alt={title}
        />
        <figcaption className={css.caption}>
          {body}
        </figcaption>
        <Time date={date} />
      </figure>
      <div className={css.share}>
        <ShareButtons
          title={title}
          body={body}
          image={image.src}
        />
      </div>
      <Button onClick={onClick}>
        <Icon type="arrow-back" />
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
