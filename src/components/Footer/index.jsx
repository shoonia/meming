import React, { useRef, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import FooterView from './FooterView';
import css from './Footer.module.scss';

function Footer({ root }) {
  const { current } = useRef(document.getElementById(root));

  useEffect(() => {
    current.classList.add(css.section);
  }, []);

  return createPortal(
    <FooterView />,
    current,
  );
}

Footer.propTypes = {
  root: PropTypes.string.isRequired,
};

export default memo(Footer);
