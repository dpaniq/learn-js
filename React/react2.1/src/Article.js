import React, { Component } from 'react'
import Comments from './Comments'
// export default function Article(props) { // functional component - simplest component

//     const { article }  = props // деструктуризация

//     return (
//         <div>
//             <h3> { article.title } </h3>
//             <section> { article.text } </section>
//         </div>
//     )
// }

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false    
        }
    }

    render () {
        // props get 'article'
        const { article } = this.props
        const { isOpen } = this.state

        return ( 
            <div>
                <h3> { article.title } </h3>
                <button onClick = { this.toggleOpen }> { isOpen ? 'Close' : 'Open' } </button>
                {this.getBody()}
                
            </div>
        )
    }

    getBody (){
        const { article } = this.props
        if (!this.state.isOpen) return null
        return ( 
            <section>
                { article.text } 
                <Comments comment= {article.comments} />
            </section> )    
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

