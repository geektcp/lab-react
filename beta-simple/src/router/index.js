import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import adminRouter from './admin';
import webRouter from './web';
import rootRouter from './root';

const routerList = [
    rootRouter,
    adminRouter,
    webRouter
]

class Router extends Component {
    generateRoute(rootPath, ele) {
        var absolutePath;
        if (rootPath === '/') {
            absolutePath = ele.path;
        } else {
            absolutePath = rootPath + ele.path;
        }
        if (ele.childRouter) {
            if (ele.component) {
                return (
                    <Route
                        key={ele.name} path={absolutePath}
                        render={() => (
                            <ele.component>
                                {
                                    ele.childRouter.map((item) => {
                                        return this.generateRoute(absolutePath, item)
                                    })
                                }
                            </ele.component>
                        )}>
                    </Route>
                )
            } else {
                return (
                    <Route
                        key={ele.name}
                        render={() => (
                            ele.children.map((item) => {
                                return this.generateRoute(absolutePath, item)
                            })
                        )}>
                    </Route>
                )
            }
        }

        if (ele.redirect) {
            return <Route exact key={ele.name} path={absolutePath} render={
                () => (
                    <Redirect to={ele.redirect}/>)}>
            </Route>
        }
        return <Route exact key={ele.name} path={absolutePath} component={ele.component}/>
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routerList.map(item => {
                            return this.generateRoute("/", item);
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
