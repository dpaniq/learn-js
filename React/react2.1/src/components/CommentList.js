import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    
    render () {
        // console.log(this.props)
        const {isOpen, toggleOpen} = this.props
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
                { comments.map(comment => <li key = { comment.id }><Comment comment = {comment}/></li>) }
            </ul>
        )
    }

}

export default toggleOpen(CommentList)