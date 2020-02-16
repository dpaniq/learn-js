import React, { Component } from 'react'
// import PropTypes from 'prop-types'


 class App extends Component {
    state = {
        text: ''
    }
    
    render () {
        return (
            <div>
                <input type='text' value = {this.state.text} onChange = {this.handleTextIn} />
            </div>
        )
    }
    handleTextIn = (ev) => {
        this.setState({
            text: ev.target.value
        })
    }
}

// // Check Prop-types
// App.propTypes = {
//     articles: PropTypes.array.isRequired
// }


export default App