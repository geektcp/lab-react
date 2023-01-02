import {HashRouter as Router, Route, Link} from "react-router-dom";

var React = require('react');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/">tab1</Link></li>
                    <li><Link to="/tab2">tab2</Link></li>
                    <li><Link to="/tab3">tab3</Link></li>
                </ul>
                父组件
                {this.props.children}
            </div>
        );
    }
}

export default Home;
