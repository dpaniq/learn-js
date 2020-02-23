import React, { Component } from 'react'
import CommentList from '../Comment/CommentList'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article : PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired,

        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
        
    }

    render () {
        const { article, isOpen, toggleOpen } = this.props
        // console.log('From Article: ', article, isOpen, toggleOpen)
        return ( 
            <div>
                <h3> { article.title } </h3>
                <button onClick = { toggleOpen }> { isOpen ? 'Close' : 'Open' } </button>
                {this.getBody()}
                
            </div>
        )
    }

    getBody (){
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return ( 
            <section>
                <i>{ article.date }</i><br/>
                { article.text } 
                <CommentList comments= {article.comments} />
            </section> )    
    }

    UNSAFE_componentWillUpdate (nextProps, nextState) {
    
        return nextProps.isOpen !== this.props.isOpen
    }
}

export default Article