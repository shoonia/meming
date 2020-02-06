import React, { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import NavbarView from './NavbarView';
import css from './Navbar.module.scss';

function Navbar({ root }) {
  const { current } = useRef(document.getElementById(root));

  const isHomePage = useCallback((_, location) => {
    const [, first] = location.pathname.split('/');
    return first === 'page' || first === '';
  });

  useEffect(() => {
    current.classList.add(css.container);
  }, []);

  return createPortal(
    <NavbarView isHomePage={isHomePage} />,
    current,
  );
}

Navbar.propTypes = {
  root: PropTypes.string.isRequired,
};

export default Navbar;
