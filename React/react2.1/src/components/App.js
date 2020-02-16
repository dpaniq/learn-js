import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticlesList'
import Search from './Search'
import DaysPicker from './DayPicker'

export default function App ({articles}) {
    // console.log('From APP: ', articles)
    return (
        <div className = 'container'>
            <DaysPicker />
            <Search />
            <ArticleList articlelist = { articles }/>
        </div>
    )
}

// Check Prop-types
App.propTypes = {
    articles: PropTypes.array.isRequired
}

