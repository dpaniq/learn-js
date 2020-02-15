import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticlesList'


export default function App ({articles}) {
    // console.log('From APP: ', articles)
    return (
        <ArticleList articlelist = { articles }/>
    )
}

// Check Prop-types
App.propTypes = {
    articles: PropTypes.array.isRequired
}

