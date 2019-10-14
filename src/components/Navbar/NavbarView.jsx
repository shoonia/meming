import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from '../lib/Icon';
import css from './Navbar.module.scss';
import { PUBLIC_URL } from '../../constants';

function NavbarView({ isHomePage }) {
  return (
    <nav
      className={css.navbar}
      aria-label="website navigation"
    >
      <a
        href="/"
        rel="home"
        className={css.navItem}
        aria-label="refresh site"
      >
        <Icon type="refresh" />
      </a>
      <NavLink
        to={`${PUBLIC_URL}/`}
        className={css.navItem}
        activeClassName={css.isActive}
        isActive={isHomePage}
      >
        Home
      </NavLink>
      <NavLink
        to={`${PUBLIC_URL}/grid`}
        className={css.navItem}
        activeClassName={css.isActive}
        exact
      >
        Grid
      </NavLink>
    </nav>
  );
}

NavbarView.propTypes = {
  isHomePage: PropTypes.func.isRequired,
};

export default NavbarView;
