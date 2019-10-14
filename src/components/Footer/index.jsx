import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import FooterView from './FooterView';
import css from './Footer.module.scss';

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
    const { root } = this.props;

    this.node = document.getElementById(root);
    this.node.classList.add(css.section);
  }

  render() {
    return createPortal(
      <FooterView />,
      this.node,
    );
  }
}

Footer.propTypes = {
  root: PropTypes.string.isRequired,
};

export default Footer;
