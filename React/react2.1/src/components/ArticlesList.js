import React from 'react'
import Article from './Article'


export default function ArticleList(props) {
   
    const articleElement = props.articlelist.map((article) => <li key = {article.id}><Article article = { article }/></li>)

    return (
        <ul>
            { articleElement }
        </ul>
    )
}