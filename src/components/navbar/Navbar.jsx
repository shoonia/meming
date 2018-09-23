import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env;

const Navbar = ({ root }) => createPortal(
  <NavLink to={`${PUBLIC_URL}/`} className="navbar-item">
    Home
  </NavLink>,
  document.getElementById(root),
);

Navbar.propTypes = {
  root: PropTypes.string.isRequired,
};

export default Navbar;
