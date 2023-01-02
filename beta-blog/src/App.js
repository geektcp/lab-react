import { BrowserRouter, Route, Link } from "react-router-dom";

function Index() { return <h3>Home</h3> }

function About() { return <h3>About</h3> }

function Users() { return <h3>Users</h3> }

function App() {
    return (
        <BrowserRouter>
            {/* 路由器组件 BrowserRouter */}
            {/* 注意，路由器组件只能有一个子元素，所以我们一般会使用 <div> 将元素包裹起来 */}
            <div>
                {/* 导航组件 Link，用于在前端页面展示导航样式，类似 <a> 标签 */}
                {/* to 属性指定 URL 路径 */}
                <Link to="/">Home</Link><br />
                <Link to="/about/">About</Link><br />
                <Link to="/users/">Users</Link><br />

                {/* 路由匹配组件 Route，用于定义路由匹配规则，并在路径匹配成功后渲染组件 */}
                {/* path 属性指定匹配的路径，component 属性指定使用的组件 */}
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>
        </BrowserRouter>
    )
}

export default App;
