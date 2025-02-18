import { lazy } from 'react';

export default [
  lazy(() => import('./Home')),
  lazy(() => import('./About')),
  lazy(() => import('./Knowledge')),
  lazy(() => import('./UnderDevelopment'))
]