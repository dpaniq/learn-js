import React from 'react'
import { render } from 'react-dom'

import Article from './Article'
import { articles } from './fixtures'

function App () {
    return (
        <Article article = { articles[0] }/>
  
    )
        
    
}

render (
    <App />, document.getElementById('root')
)