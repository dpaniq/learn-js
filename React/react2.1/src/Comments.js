import React, { Component } from 'react'

export default class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            commentON: false
        }
    }

    render () {
        const { commentON } = this.state

        return (
            <div>
                <button onClick = { this.toggleComment }> { commentON ? 'Hide comments' : 'Show comments' } </button>
                <ul>
                    {this.getComments()}
                </ul>
            </div>
        )
    }

    toggleComment = () => {
        this.setState(
            {commentON: !this.state.commentON}
        )
    }

    getComments() {
        
        if (!this.state.commentON) return null
        
        return this.props.comment.map((com) => {
            return (
                <li key = { com.id }>
                    <h4>{ com.user }</h4>
                    <p>{ com.text }</p>
                    <hr />
                     
                </li>
            )
        })
        
    }
}