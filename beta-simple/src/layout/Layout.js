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
                        <Link to="/">/</Link>
                    </li>
                    <li>
                        <Link to="/admin/tab1">tab1</Link>
                    </li>
                    <li>
                        <a href="/admin/tab2">tab2</a>
                    </li>
                    <li>
                        <Link to="/admin/tab3">tab3</Link>
                    </li>
                    <li>
                        <Link to="/admin/example1">example1</Link>
                    </li>
                    <li>
                        <Link to="/web/about">about</Link>
                    </li>
                    <li>
                        <Link to='/web/error'>error</Link>
                    </li>
                </ul>
                父组件
                {this.props.children}
            </div>
        )
    }
}

export default Layout
