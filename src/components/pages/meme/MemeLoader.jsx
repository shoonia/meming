import React from 'react';
import ContentLoader from 'react-content-loader';

import { Wrapper } from './meme-styled';

const MemeLoader = () => (
  <Wrapper role="presentation">
    <ContentLoader
      width="400"
      height="300"
      speed="2"
      primaryColor="#ecebeb"
      secondaryColor="#DADADA"
    >
      <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
  </Wrapper>
);

export default MemeLoader;
