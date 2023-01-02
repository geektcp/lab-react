import Layout from '@/layout/admin'
import lazy from '@/component/Lazy'

export default {
  path: '/admin',
  name: 'home',
  component: Layout,
  childRouter: [
    { path: '', component: lazy(() => import('@/view/index')) },
  ]
}
