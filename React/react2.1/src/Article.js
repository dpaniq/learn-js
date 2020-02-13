import React, { Component } from 'react'

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


        return (
            <div>
                <h3> { this.props.article.title } </h3>
                <button onClick = { this.toggleOpen }>
                    {this.state.isOpen ? 'Close' : 'Open' } </button>
                {this.getBody()}
            </div>
        )
    }

    getBody (){

        if (!this.state.isOpen) return null
        return <section> { this.props.article.text } </section>
        
            
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

