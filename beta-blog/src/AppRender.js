import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import PublicComponent from '@/component/Public'

import router from '@/router'
function App() {
    const role = useSelector(state => state.user.role) // 相当于 connect(state => state.user.role)(App)

    function renderRoutes(router, contextPath) {
        const children = [];

        const renderRoute = (item, routeContextPath) => {
            let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath
            newContextPath = newContextPath.replace(/\/+/g, '/');
            if (newContextPath.includes('admin') && role !== 1) {
                item = {
                    ...item,
                    component: () => <Redirect to='/' />,
                    children: []
                }
            }
            if (!item.component) return;

            if (item.childRouter) {
                const childRouter = renderRoutes(item.childRouter, newContextPath);
                children.push(
                    <Route
                        key={newContextPath}
                        render={props => <item.component {...props}>{childRouter}</item.component>}
                        path={newContextPath}
                    />
                );
                item.childRouter.forEach(r => renderRoute(r, newContextPath));
            } else {
                children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
            }
        };

        router.forEach(item => renderRoute(item, contextPath));

        return <Switch>{children}</Switch>
    }

    const children = renderRoutes(router, '/');
    return (
        <BrowserRouter>
            {children}
            {/*<PublicComponent />*/}
        </BrowserRouter>)
}

export default App;
