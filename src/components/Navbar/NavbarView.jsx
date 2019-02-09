import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from '../lib/Icon';
import css from './Navbar.module.scss';

const { PUBLIC_URL } = process.env;

const NavbarView = ({ isHomePage }) => (
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

NavbarView.propTypes = {
  isHomePage: PropTypes.func.isRequired,
};

export default NavbarView;
