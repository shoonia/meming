import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import NavbarView from './NavbarView';
import css from './Navbar.module.scss';

class Navbar extends React.Component {
  static propTypes = {
    root: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { root } = this.props;

    this.navbarRoot = document.getElementById(root);
    this.navbarRoot.classList.add(css.container);
  }

  isHomePage = (_, location) => {
    const [, first] = location.pathname.split('/');
    return first === 'page' || first === '';
  };

  render() {
    return createPortal(
      <NavbarView isHomePage={this.isHomePage} />,
      this.navbarRoot,
    );
  }
}

export default Navbar;
