import React, {Component} from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import adminRouter from './admin';

const routerList = [
    adminRouter,
]

class Router extends Component {
    generateRoute(ele) {
        if (ele.childRouter) {
            if (ele.component) {
                return (
                    <Route key={ele.name} path={ele.path} render={() => (
                        <ele.component>
                            {
                                ele.childRouter.map((item) => {
                                    return this.generateRoute(item)
                                })
                            }
                        </ele.component>
                    )}>
                    </Route>
                )
            } else {
                return (
                    <Route key={ele.name} render={() => (
                        ele.children.map((item) => {
                            return this.generateRoute(item)
                        })
                    )}>
                    </Route>
                )

            }

        }

        if (ele.redirect) {
            return <Route exact key={ele.name} path={ele.path} render={
                () => (
                    <Redirect to={ele.redirect}/>)}>
            </Route>
        } else {
            return <Route exact key={ele.name} path={ele.path} component={ele.component}/>
        }

    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routerList.map(item => {
                            return this.generateRoute(item)
                        })
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
