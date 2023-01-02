var React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: props.match
        }
    }

    render() {
        return <div>
            我是message {this.state.match.params.id}
        </div>;
    }
}

export default App;
