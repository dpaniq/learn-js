import React from 'react'
import PropTypes from 'prop-types'

export default function Comment ({comment}) {
    return (
        <div>
            <h4><b>{ comment.user }</b></h4>
            <p>{ comment.text }</p>
            <hr />
        </div>
            
    )
}

Comment.propTypes = {
    comment: PropTypes.shape ({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}
