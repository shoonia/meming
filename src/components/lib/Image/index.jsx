import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './Image.module.scss';

const Image = (props) => {
  const {
    src,
    alt,
    className,
    ...rest
  } = props;

  const classList = classNames(css.image, className);

  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      className={classList}
      crossOrigin="anonymous"
    />
  );
};

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
