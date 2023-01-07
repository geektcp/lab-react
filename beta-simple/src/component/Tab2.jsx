import {HashRouter as Router, Route, Link} from "react-router-dom";
import Message from './Message.jsx';

var React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                我是tab2
                <Link to="/admin/tab2/messages/233">
                    click msg
                </Link>
                <Route path="/admin/messages/:id" component={Message}>

                </Route>
            </div>
        );
    }
}

export default App;
