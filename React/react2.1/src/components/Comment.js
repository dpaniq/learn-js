import React from 'react'
import PropTypes from 'prop-types'

Comment.propTypes = {
    comment: PropTypes.shape ({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comment: PropTypes.string
    }).isRequired
}

export default function Comment ({comment}) {
    console.log(comment)
    return (
        <div>
            <h4><b>{ comment.user }</b></h4>
            <p>{ comment.text }</p>
            <hr />
        </div>
            
    )
}


