import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env;

class Navbar extends React.Component {
  static propTypes = {
    root: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { root } = this.props;
    this.navbarRoot = document.getElementById(root);
  }

  isHomePage = (_, location) => {
    const [, first] = location.pathname.split('/');
    return first === 'page' || first === '';
  };

  render() {
    return createPortal(
      <>
        <NavLink
          to={`${PUBLIC_URL}/`}
          className="navbar-item"
          activeClassName="is-active"
          isActive={this.isHomePage}
        >
          Home
        </NavLink>
        <NavLink
          to={`${PUBLIC_URL}/grid`}
          className="navbar-item"
          activeClassName="is-active"
          exact
        >
          Grid
        </NavLink>
      </>,
      this.navbarRoot,
    );
  }
}

export default Navbar;
