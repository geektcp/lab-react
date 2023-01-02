import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from './component/Home.jsx';
import Tab1 from './component/Tab1.jsx';
import Tab2 from './component/Tab2.jsx';
import Tab3 from './component/Tab3.jsx';

var React = require('react');

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <Home>
                    <Route path="/" component={Tab1}/>
                    <Route path="/tab2" component={Tab2}/>
                    <Route path="/tab3" component={Tab3}/>
                </Home>

            </BrowserRouter>
        );
    }
}

export default App;
