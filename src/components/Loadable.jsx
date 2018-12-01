import React, { Suspense, lazy } from 'react';

const Loadable = (loader) => {
  const Component = lazy(loader);

  return props => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
