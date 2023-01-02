import { GITHUB } from '@/config'
import Layout from '@/layout/web'
import lazy from '@/component/Lazy'

export default {
  path: '/',
  name: 'home',
  component: Layout,
    childRouter: [
    { path: '*', component: lazy(() => import('@/component/404')) },
  ],
}
