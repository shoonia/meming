import React from 'react';

import Icon from '../lib/Icon';
import css from './Footer.module.scss';

const FooterView = () => (
  <div className={css.content}>
    <hr className={css.separator} />
    <div>
      <a
        href="https://twitter.com/_shoonia"
        className={css.twitter}
        aria-label="twitter"
      >
        <Icon type="twitter" />
      </a>
      <a
        href="https://github.com/shoonia"
        className={css.github}
        aria-label="github"
      >
        <Icon type="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/shoonia"
        className={css.linkedin}
        aria-label="linkedin"
      >
        <Icon type="linkedin" />
      </a>
    </div>
    <div>@ 2018-{new Date().getFullYear()}</div>
  </div>
);

export default FooterView;
