
import Layout from '@/layout/web'
import React, {Suspense, lazy} from 'react';

export default {
  path: '/',
  name: 'web',
  component: Layout,
  childRoutes: [
    { path: '/about', component: lazy(() => import('../view/about')) },
    { path: '*', component: lazy(() => import('../component/404')) },
  ],
}
