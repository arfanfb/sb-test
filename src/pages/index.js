import React , { lazy, Suspense } from 'react';

const Suspensed = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<div
      style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}
    >Loading...</div>}>
      <Element {...props} />
    </Suspense>
  );
};

const pages = {
  Home: Suspensed(lazy(() => import('./Home'))),
  Movie: Suspensed(lazy(() => import('./Movie'))),
  NotFound: Suspensed(lazy(() => import('./NotFound'))),
};

export default pages;
