import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import router from "@/router";

var React = require('react');

// class App extends React.Component {
//     constructor() {
//         super();
//     }
//
//     render() {
//         return (
//             <BrowserRouter>
//                 <Home>
//                     <Route path="/" component={Tab1}/>
//                     <Route path="/tab2" component={Tab2}/>
//                     <Route path="/tab3" component={Tab3}/>
//                 </Home>
//
//             </BrowserRouter>
//         );
//     }
// }


const App = props => {

    // 解构 route
    function renderRoutes(router, contextPath) {
        const children = []

        const renderRoute = (item, routeContextPath) => {
            let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath;
            newContextPath = newContextPath.replace(/\/+/g, '/');

            if (!item.component) return;

            if (item.childRoutes) {
                const childRoutes = renderRoutes(item.childRoutes, newContextPath);
                children.push(
                    <Route
                        key={newContextPath}
                        render={props => <item.component {...props}>{childRoutes}</item.component>}
                        path={newContextPath}
                    />
                );
                item.childRoutes.forEach(r => renderRoute(r, newContextPath))
            } else {
                children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
            }
        };

        router.forEach(item => renderRoute(item, contextPath));

        return <Switch>{children}</Switch>;
    }

    const children = renderRoutes(router, '/');
    return (
        <BrowserRouter>
            {children}
            {/*<PublicComponent />*/}
        </BrowserRouter>)
}

export default App;
