import React from 'react'
import { render } from 'react-dom'

import ArticleList from './components/ArticlesList'
import { articles } from './data'

function App () {
    return (
        <ArticleList articlelist = { articles }/>
  
    )
        
    
}

render (
    <App />, document.getElementById('root')
)