import React, { Component } from 'react'
import '../css/addComment.css'
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
        value: '',
        cls: ''
    }

    render () {
        return (
            <div>
                <label> Name:
                    <input type="text"  /> 
                </label> <br />
                <label> Comment: 
                    <input type="text" className = {this.state.cls} onChange = {this.fieldValidate}/>
                </label>
                <input type="submit" value="Отправить" />
          </div>
        )
    }

    fieldValidate = (ev) => {

        this.setState({
            cls: ev.target.value.length > 5 ? 'addComment' : 'error'
        })
        console.log(this.state.cls)
    }

    handleTextIn = (ev) => {
        this.setState({
            text: ev.target.value
        })
    }
    
}



export default Comment