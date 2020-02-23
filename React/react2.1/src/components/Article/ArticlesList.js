import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import collapseComment from '../../decorators/collapseComment'


class ArticleList extends Component {

    

    render () {
        const {articlelist, openArticleId, toggleOpenArticle} = this.props
        // console.log('From ArticleList: ', this.props)


        const articleElement = articlelist.map((article) => <li key = {article.id}>
            <Article 
                article = { article }
                isOpen = {article.id === openArticleId}
                toggleOpen = {toggleOpenArticle.bind(this, article.id)}
            /></li>)
        
        return (
            <ul>
                { articleElement }
            </ul>
        )
    }
}

// Check Prop-types
ArticleList.propTypes = {
    articlelist: PropTypes.array.isRequired
}

export default collapseComment(ArticleList)