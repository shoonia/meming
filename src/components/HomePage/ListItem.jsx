import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Time from '../lib/Time';
import Image from '../lib/Image';
import css from './List.module.scss';
import { PUBLIC_URL } from '../../constants';

function ListItem(props) {
  const {
    id,
    title,
    body,
    image,
    date,
    openModal,
    isLazy,
  } = props;

  const onClick = () => openModal(id);
  const label = title.trim() || '***';
  const href = `${PUBLIC_URL}/post/${id}`;

  return (
    <article className={css.item}>
      <h2 className={css.title}>
        <NavLink to={href}>
          {label}
        </NavLink>
      </h2>
      <figure className={css.content}>
        <button
          type="button"
          aria-label="Show image"
          tabIndex="0"
          className={css.wrapper}
          onClick={onClick}
        >
          <Image
            src={image.src}
            alt={title}
            className={css.image}
            loading={isLazy ? 'lazy' : 'eager'}
          />
        </button>
        <figcaption className={css.caption}>
          {body}
        </figcaption>
      </figure>
      <Time date={date} />
    </article>
  );
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  isLazy: PropTypes.bool.isRequired,
};

export default memo(ListItem);
