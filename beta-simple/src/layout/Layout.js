import React from 'react'
import {Link} from "react-router-dom";

class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul role="nav">
                    <li>
                        <Link to="/">tab1</Link>
                    </li>
                    <li>
                        <a href="/tab2">tab2</a>
                    </li>
                    <li>
                        <Link to="/tab3">tab3</Link>
                    </li>
                    <li>
                        <Link to="/example1">example1</Link>
                    </li>
                </ul>
                父组件
                {this.props.children}
            </div>
        )
    }
}

export default Layout
