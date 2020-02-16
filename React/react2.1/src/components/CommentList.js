import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import AddComment from './AddComment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    
    static propTypes = {
        comments : PropTypes.array.isRequired
    }

    render () {
        const {isOpen, toggleOpen} = this.props
        // console.log('From CommentList: ', this.props)
        const text = isOpen ? 'Hide comments' : 'Show comments'

        return (
            <div>
                <button onClick = { toggleOpen }> { text } </button>
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet!</p>

        return (
            <ul>
                <AddComment />
                { comments.map(comment => <li key = { comment.id }><Comment comment = {comment}/></li>) }
            </ul>
        )
    }

}

export default toggleOpen(CommentList)