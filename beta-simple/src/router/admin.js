import Home from '@/component/Home.jsx';
import Tab1 from '@/component/Tab1.jsx';
import Tab2 from '@/component/Tab2.jsx';
import Tab3 from '@/component/Tab3.jsx';


export default {
    path: '/',
    name: 'home',
    component: "",
    childRouter: [
        {path: '/',         component: () => import(Home)},
        {path: '/example',  component: () => import('@/view/example1.jsx')},
        {path: '/tab1',  component: () => import(Tab1)},
        {path: '/tab2',  component: () => import(Tab2)},
        {path: '/tab3',  component: () => import(Tab3)},
    ]
}
