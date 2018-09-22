import React from 'react';
import ContentLoader from 'react-content-loader';

import { Wrapper } from './list-styled';

const ListLoader = () => (
  <div className="section">
    <Wrapper className="container has-text-centered" role="presentation">
      <ContentLoader
        speed={1}
        height="160"
        primaryColor="#f3f3f3"
        secondaryColor="#ebebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
      </ContentLoader>
    </Wrapper>
  </div>
);

export default ListLoader;
