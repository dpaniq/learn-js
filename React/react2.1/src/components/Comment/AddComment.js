import React, { Component } from 'react'
import '../../css/addComment.css'
// import PropTypes from 'prop-types'

// Comment.propTypes = {
//     comment: PropTypes.shape ({
//         user: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         comment: PropTypes.string
//     }).isRequired
// }
class Comment extends Component {
    // css: https://medium.com/@stasonmars/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D1%82%D1%80%D1%91%D0%BC-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2-react-2ca5c0c7464b
    // css: https://ru.reactjs.org/docs/faq-styling.html
    state = {
        user: '',
        text: ''
    }

    render () {
        return (
            <form onSubmit= {this.handleSubmit}>
                user: <input value = {this.state.user}
                            onChange = {this.handleChange('user')}
                            className = {this.getClassName('user')} />
                comment:  <input value = {this.state.text}
                            onChange = {this.handleChange('text')}
                            className = {this.getClassName('text')} /> 
                
                <input type="submit" value="Submit" />
                <hr />
          </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type] && this.state[type].length < limits[type].min ? 'error' : ''

    handleChange = (type) => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }

}

const limits = {
    user: {
        min: 5,
        max: 15
    },

    text: {
        min: 20,
        max: 50
    }
    
}


export default Comment