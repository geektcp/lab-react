import Layout from '../layout/Layout';
import aboutPage from '../view/about';
import errorPage from '../component/404';

export default {
    name: 'web',
    path: '/web',
    component: Layout,
    childRouter: [
        {
            name: 'about',
            auto: true,
            path: '/about',
            component: aboutPage
        },
        {
            name: '*',
            auto: true,
            path: '/error',
            component: errorPage},
    ],
}
