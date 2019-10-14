import React from 'react';
import ContentLoader from 'react-content-loader';

import css from './List.module.scss';

function ListLoader() {
  return (
    <div
      className={css.loader}
      role="presentation"
    >
      <ContentLoader
        speed={2}
        height="220"
        primaryColor="#ecebeb"
        secondaryColor="#DADADA"
      >
        <rect x="25%" y="0" rx="5" ry="5" width="50%" height="1.1rem" />
        <rect x="0" y="2.8rem" rx="5" ry="5" width="100%" height="10rem" />
      </ContentLoader>
    </div>
  );
}

export default ListLoader;
