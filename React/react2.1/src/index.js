import React from 'react'
import { render } from 'react-dom'

import ArticleList from './ArticlesList'
import { articles } from './fixtures'

function App () {
    return (
        <ArticleList articlelist = { articles }/>
  
    )
        
    
}

render (
    <App />, document.getElementById('root')
)