import lazy from 'react';
import Home from '../component/Home.jsx';
import Tab1 from '../component/Tab1.jsx';
import Tab2 from '../component/Tab2.jsx';
import Tab3 from '../component/Tab3.jsx';
import example1 from '../view/example1.jsx';
import Layout from '../layout/Layout';


export default {
    path: '/',
    name: 'admin',
    component: Layout,
    childRouter: [
        {
            name: 'home',
            auto: true,
            path: '/home',
            component: Home
        },
        {
            name: 'example1',
            auto: true,
            path: '/example1',
            component: example1
        },
        {
            name: 'tab1',
            auto: true,
            path: '/tab1',
            component: Tab1
        },
        {
            name: 'tab2',
            auto: true,
            path: '/tab2',
            component: Tab2
        },
        {
            name: 'tab3',
            auto: true,
            path: '/tab3',
            component: Tab3
        },
    ]
}
