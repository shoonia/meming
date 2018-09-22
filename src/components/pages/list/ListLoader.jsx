import React from 'react';
import ContentLoader from 'react-content-loader';

import { styleWrapper } from './ListItem';

const ListLoader = () => (
  <div className="section">
    <div
      className="container has-text-centered"
      style={styleWrapper}
      role="presentation"
    >
      <ContentLoader
        speed={2}
        height="160"
        primaryColor="#f3f3f3"
        secondaryColor="#ebebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
      </ContentLoader>
    </div>
  </div>
);

export default ListLoader;
