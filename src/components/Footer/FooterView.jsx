import React from 'react';

import Icon from '../lib/Icon';
import css from './Footer.module.scss';

const FooterView = () => (
  <div className={css.content}>
    <div>
      <a
        href="https://twitter.com/_shoonia"
        className={css.twitter}
        aria-label="follow me on twitter"
        rel="me"
      >
        <Icon type="twitter" />
      </a>
      <a
        href="https://github.com/shoonia"
        className={css.github}
        aria-label="follow me on github"
        rel="me"
      >
        <Icon type="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/shoonia"
        className={css.linkedin}
        aria-label="follow me on linkedin"
        rel="me"
      >
        <Icon type="linkedin" />
      </a>
    </div>
    <small className={css.copyright}>
      {`@2018-${new Date().getFullYear()}`}
    </small>
  </div>
);

export default FooterView;
