import React, { Suspense, lazy } from 'react';

export default (loader) => {
  const Component = lazy(loader);

  return function Loadable(props) {
    return (
      <Suspense fallback={null}>
        <Component {...props} />
      </Suspense>
    );
  };
};
