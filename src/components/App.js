import React, {Component} from 'react'
import PropTypes from 'prop-types'

class App extends Component {
    constructor(props) {
        super(props);
        console.log(1)
    }

    render() {
        return (<div className="container-fluid">
        <h1>Header here</h1>
        {this.props.children}
    </div>);
    }
}

App.propTypes = {
    children: PropTypes.array.isRequired
}

export default App;