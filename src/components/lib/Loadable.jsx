import React, { Suspense, lazy } from 'react';

export default function (loader) {
  const Component = lazy(loader);

  return function Loadable(props) {
    return (
      <Suspense fallback={null}>
        <Component {...props} />
      </Suspense>
    );
  };
}
